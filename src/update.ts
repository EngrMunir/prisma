import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async() =>{
    // const singleUpdate = await prisma.post.update({
    //     where:{
    //         id:1
    //     },
    //     data:{
    //         title:"title 6",
    //         content:'content 6',
    //         authorName:'author 6'
    //     }
    // })
    // console.log(singleUpdate)

    const upsertData = await prisma.post.upsert({
        where:{
            id:5
        },
        update:{
            authorName:'Sirajul'
        },
        create:{
            title:"title 7",
            content:'Content 7'
        }
    })
};

updates()