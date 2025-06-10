import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async()=>{
    // find all
    const getAllFromDB = await prisma.post.findMany();

    const findFirst = await prisma.post.findFirst({
        where: {
            id: 1
        }
    })
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where: {
    //         published: false
    //     }
    // })

    console.log({findFirst})
}

main();