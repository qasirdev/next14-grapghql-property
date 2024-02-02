import { Listing, PrismaClient } from "@prisma/client";
import { data } from "./listingsData";
const prisma =new PrismaClient();
async function main() {
  console.log("Starting to seed data...");
  
  try {
    // const user = await prisma.user.create({
    //   data: {
    //     email: "test1@test.com",
    //     name: "test test",
    //     hashedPassword: "test1"
    //   },
    // });
    const upsertPromises = data.map((listing:Listing) => {
      return prisma.listing.upsert({
        where: {id: listing.id},
        update: {},
        create: listing
      })
    });
    await Promise.all(upsertPromises);
  
    console.log("Successfully seed data");    
  } catch (error) {
    console.log(error);        
  }
}

main()
.then(async () => await prisma?.$disconnect())
.catch(async (e) => {
  console.error(e);
  await prisma?.$disconnect();
  process.exit(1);
})

//run command 
//npx prisma db seed