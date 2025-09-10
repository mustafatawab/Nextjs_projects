import { PrismaClient, Prisma } from "@/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "ali",
    email: "ali@prisma.io",
  },
  {
    name: "ahmad",
    email: "ahmad@prisma.io",
  },
  {
    name : "saqib",
    email: "saqib@gmail.com"
  }
];


const postData: Prisma.PostCreateInput[] = [
    {
        content : "Learn full stack web developement",
        author : {
            connect : {
                id : "cmepeayna0000j3xv61zg3d3z"
            }
        },
        
    }
]



export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  for (const u of postData){
    await prisma.post.create({data : u})
  }
}



main();