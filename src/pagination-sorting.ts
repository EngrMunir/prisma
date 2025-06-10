
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const paginationSorting = async() =>{
    // offset pagination
    const offsetData = await prisma.post.findMany({
        skip:2,
        take:2
    })

    // console.log("Offset paginated data: ", offsetData);
    // cursor based pagination
    const cursorData = await prisma.post.findMany({
        skip:2,
        take:2,
        cursor:{
            id: 2
        }
    })

    // console.log("Offset paginated data: ", offsetData);
    // sorting
    const sortedData = await prisma.post.findMany({
        orderBy:{
            title:'asc'
        },
        where:{
            title:"Title 1"
        }
    });

    console.log("sorted data: ", sortedData)
};

paginationSorting();