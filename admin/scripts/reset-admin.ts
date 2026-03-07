import { db } from "../src/lib/db";
import { users } from "../src/lib/db/schema";
import { hash } from "bcrypt";
import { nanoid } from "nanoid";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
    const username = process.env.ADMIN_USERNAME || "admin";
    const password = process.env.ADMIN_PASSWORD || "admin";

    console.log("--- Admin Reset Başladı ---");

    try {
        // Bütün istifadəçiləri silirik
        await db.delete(users);
        console.log("Bütün mövcud istifadəçilər silindi.");

        // Yeni admin yaradırıq
        const hashedIconsPassword = await hash(password, 10);
        await db.insert(users).values({
            id: nanoid(),
            username,
            password: hashedIconsPassword,
        });

        console.log(`Yeni admin istifadəçisi yaradıldı: ${username}`);
        console.log(`.env faylındakı şifrə tətbiq edildi: ${password}`);
    } catch (err) {
        console.error("Xəta baş verdi:", err);
    }

    process.exit(0);
}

main();
