const {getAllKitap,getByIdKitap,updateKitapById,createNewKitap,deleteKitapById}= require ("../services/kitap");

const fetchAllKitap = async (req,res,next)=>{
    const Kitapler = await getAllKitap();
    return res.status(200).json(Kitapler);
}
const fethKitapById = async(req,res,next)=>{
    const Kitap = await getByIdKitap();
    return res.status(200).json(Kitap)
}

const updateKitap = async(req,res,next)=>{
    const guncelKitap = await updateKitapById();
    return res.status(200).json(guncelKitap);

}
const createKitap = async (req,res,next)=>{
    const newKitap = await createNewKitap();
    return res.status(200).json(newKitap);
}
const deleteKitap = async (req,res,next)=>{
    const silinecekKitap = await deleteKitapById();
    return res.status(200).json(silinecekKitap);
}
module.exports = {
    fetchAllKitap,
    updateKitap,
    fethKitapById,
    createKitap,deleteKitap
};

