import { toast } from "sonner";
import { User, UserDto } from "@/utils/types/User";

const API_URL = process.env.NEXT_PUBLIC_GATEWAY_URL;

function generateUUID() {
  return crypto.randomUUID();
}

async function createUser(user: UserDto): Promise<void> {
  try {
    const response = await fetch(`${API_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    toast("User created successfully");
  } catch (error) {
    toast("Error creating user");
    return;
  }
}

async function fetchUserByAuthId(authId: string): Promise<User | null> {
  try {
    const response = await fetch(`${API_URL}/user/${authId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const user = await response.json();

    return user;
  } catch (error) {
    toast("Error fetching user");
    return null;
  }
}

export { createUser, fetchUserByAuthId };
