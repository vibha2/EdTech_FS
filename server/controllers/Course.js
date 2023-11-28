const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

//createCourse handler function
exports.createCourse = async(req, res) => {
    try{
        // Get user ID from request object
		const userId = req.user.id;

        //fetch data
        let {
             courseName,
             courseDescription, 
             whatYouWillLearn, 
             price,
             tag,
             category,
             status,
             instructions,
              } = req.body;

        //category is id here, as the type of category is ObjectId in course model
        //get thumbnail
        const thumbnail = req.files.thumbnailImage;

        //validation
        if(!courseName || 
            !courseDescription ||
             !whatYouWillLearn || 
             !price || 
             !category ||
             !tag ||
             !thumbnail )
        {
            return res.status(400).json({
                success:false,
                message:'All field are required',
            });
        }

        if(!status || status === undefined){
            status = "Draft";
        }

        //check for instructor
        //ye to middleware me check h gya...to why here?
        // check course model, we need intructor id also
        // const userId = req.user.id;
        const instructorDetails = await User.findById(userId, {
            accountType: "Instructor",
        });
        console.log("instructorDetails=> ",instructorDetails);
        //TODO: Verify that userId and instructorDetails._id are same or different

        if(!instructorDetails){
            return res.status(404).json({
                success:false,
                message:'Instructor details not found',
            });
        }

        //check given category is valid or not
        //category is id here
        const categoryDetails = await Category.findById(category);
        if(!categoryDetails){
            return res.status(404).json({
                success:false,
                message:'Category details not found',
            });
        }

        //Upload image to Cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDER_NAME);

        //create an entry for new course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            whatYouWillLearn: whatYouWillLearn,
            price,
            tag: tag,
            category: categoryDetails._id,
            thumbnail: thumbnailImage.secure_url,
            status: status,
            instructions: instructions,
        });

        //add the new course to the user schema of Instructor
        await User.findByIdAndUpdate(
            { _id: instructorDetails._id},
            {
                $push: {
                    courses: newCourse._id,
                    //courses array ke andr  new course ki id asign kkr rahe hai

                }
            },
            {new:true},
            );
        //Add the new course to the categories
        //update Category ka schema
        await Category.findByIdAndUpdate(
            {_id: category},
            {
                $push: {
                    course: newCourse._id,
                }
            },
            {new:true},

        );

        //return respone
        return res.status(200).json({
            success:true,
            message:"Course Created Successfully",
            data:newCourse,
        });

    }
    catch(error){

        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Failed to create Course",
        });
    }
};

//getAllCourses handler function
exports.getAllCourses = async(req, res) => {
    try{
        const allCourses = await Course.find(
            {},
            {courseName:true,
            price:true,
            thumbnail: true,
            instructor:true,
            ratingAndReviews:true,
            studentsEnrolled:true,
            })
            .populate("instructor")
            .exec();
        
        return res.status(200).json({
            success:true,
            message:'Data for all courses fetched succesfully',
            data:allCourses,
        });
        
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:"Cannot fetch Course Data ",
            error:error.message,
        });
    }
}

//getCourseDetails handler function
exports.getCourseDetails = async(req,res) => {
    try{
        //get the course id
        const {courseId} = req.body;

        //validate course id
        if(!courseId)
        {
            return res.status(400).json({
                success: false,
                message:"Could not find Course Id",
            });
        }

        // find Course Details
        const courseDetails = await Course.find(
            {_id:courseId})
            .populate(
                {
                    path: "instructor",
                    populate: {
                        path:"additionalDetails",    
                    },
                }
            )
            .populate("category")
            // .populate("ratingAndReviews")
            .populate({
                path:"courseContent",
                populate: {
                    path:"subSection",
                },
            })
            .exec();
    

        //validation
        if(!courseDetails)
        {
            return res.status(400).json({
                success:false,
                message:`Could not find the Course with ${courseId}`,
            });
        }

        //return response
        return res.status(200).json({
            success: true,
            message: "Course Details fetched Successfully",
            data:courseDetails,
        });

    }
    catch(error)
    {
        console.log(error);
         return res.status(500).json({
            success: false,
            message: error.message,
         });

    }
}