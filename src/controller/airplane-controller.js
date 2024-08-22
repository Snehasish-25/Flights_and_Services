const {AirplaneService}=require("../services/index");
const {successCodes}=require("../utils/error-codes")

const airplaneService=new AirplaneService();

const create=async(req,res)=>{
    try {
        const result=await airplaneService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data:result,
            success:true,
            message:"Created an airplane successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot create an Airplane successfully",
            err:error
        })
    }
}
const destroy=async(req,res)=>{
    try {
        const result=await airplaneService.delete(req.params.id);
        return res.status(successCodes.OK).json({
            data:result,
            success:true,
            message:"Deleted an airplane successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot Delete an Airplane successfully",
            err:error
        })
    }
}

const update=async(req,res)=>{
    try {
        const result=await airplaneService.update(req.body,req.params.id);
        return res.status(successCodes.OK).json({
            data:result,
            success:true,
            message:"Updated an airplane successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot update an Airplane successfully",
            err:error
        })
    }
}

const get=async(req,res)=>{
    try {
        const result=await airplaneService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data:result,
            success:true,
            message:"Retrieved an airplane successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot retrieve an Airplane successfully",
            err:error
        })
    }
}

const getAll=async(req,res)=>{
    try {
        const result=await airplaneService.getAll();
        return res.status(successCodes.OK).json({
            data:result,
            success:true,
            message:"Retrieved all airplane successfully",
            err:{}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot retrieve all Airplane successfully",
            err:error
        })
    }
}

module.exports={
    create,
    destroy,
    get,
    getAll,
    update
}