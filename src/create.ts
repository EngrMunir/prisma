import { PrismaClient, UserRole } from "../generated/prisma";


const prisma = new PrismaClient();

const main = async()=>{
    
    // const createUser = await prisma.user.create({
    //     data:{
    //         username:'user3',
    //         email:'user3@gmail.com',
    //         role: UserRole.user
    //     }
    // });
    // console.log(createUser)

    // const createProfile = await prisma.profile.create({
    //     data:{
    //         bio:"This is bio.....",
    //         userId:1
    //     }
    // })
    // console.log(createProfile)

    // const createCategory = await prisma.category.create({
    //     data:{
    //         name:"Software Engineering"
    //     }
    // })
    // console.log(createCategory)

    const createPost = await prisma.post.create({
        data:{
            title:"This is title",
            content:"This is content of the post 5",
            authorId: 2,
            postCategory: {
                create:[
                    {
                        categoryId: 1
                    },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 2
                    },
                    {
                        categoryId: 4
                    }
                ]
                // create:{
                //     categoryId: 2
                //     // category:{
                //     //     connect:{
                //     //         id: 1
                //     //     }
                //     // }
                // }
            }

        }
    })
    console.log(createPost);
}

main();