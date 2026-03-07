import { db } from "../src/lib/db";
import { users } from "../src/lib/db/schema";
import { hash } from "bcrypt";
import { nanoid } from "nanoid";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
    const username = process.env.ADMIN_USERNAME || "admin";
    const password = process.env.ADMIN_PASSWORD || "admin";

    const hashedIconsPassword = await hash(password, 10);

    console.log("Seeding admin user...");

    try {
        await db.insert(users).values({
            id: nanoid(),
            username,
            password: hashedIconsPassword,
        }).onConflictDoNothing();

        console.log("Admin user created or already exists.");
    } catch (err) {
        console.error("Error seeding:", err);
    }

    process.exit(0);
}

main();
