import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async()=>{
    // const result = await prisma.post.create({
    //     data:{
    //         title: "This is title",
    //         content: "This is author",
    //         authorName: "Munir"
    //     }
    // });
    // console.log(result)

    const getAllFromDB = await prisma.post.findMany();
    console.log(getAllFromDB)
}

main();