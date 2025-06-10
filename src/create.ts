import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async()=>{
    const result = await prisma.post.createMany({
        data:[
            {
            title: "This is title 1",
            content: "This is author 1",
            authorName: "Munir 1"
            },
            {
            title: "This is title 2",
            content: "This is author 2",
            authorName: "Munir 2"
            },
            {
            title: "This is title 3",
            content: "This is author 3",
            authorName: "Munir 3"
            },
        ]
    });
    console.log(result)
}

main();