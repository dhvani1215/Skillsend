
import { connectToMongoDB } from "@/lib/db";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    // Check if we can connect to MongoDB
    const connection = await connectToMongoDB();
    if (!connection.connected) {
      return { success: false, message: "Database connection failed" };
    }

    // Simulate a database check
    // In a real app, this would query MongoDB to validate credentials
    console.log(`Attempting to sign in user: ${email}`);
    
    // For demo purposes, we'll accept any email ending with @example.com and password longer than 5 chars
    if (email.endsWith("@example.com") && password.length > 5) {
      // Simulate successful login
      const user: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: email.split("@")[0],
        email
      };
      
      // Save user to localStorage for persistent sessions
      localStorage.setItem("currentUser", JSON.stringify(user));
      
      return {
        success: true,
        message: "Sign in successful",
        user
      };
    }
    
    return { success: false, message: "Invalid email or password" };
  } catch (error) {
    console.error("Sign in error:", error);
    return { success: false, message: "An error occurred during sign in" };
  }
};

export const signUp = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  try {
    // Check if we can connect to MongoDB
    const connection = await connectToMongoDB();
    if (!connection.connected) {
      return { success: false, message: "Database connection failed" };
    }

    // Simulate user registration in MongoDB
    console.log(`Registering new user: ${name}, ${email}`);
    
    // For demo purposes, we'll accept any valid-looking email and password
    if (email.includes("@") && password.length > 5) {
      // Simulate successful registration
      const user: User = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name,
        email
      };
      
      // Save user to localStorage for persistent sessions
      localStorage.setItem("currentUser", JSON.stringify(user));
      
      return {
        success: true,
        message: "Account created successfully",
        user
      };
    }
    
    return { success: false, message: "Invalid registration information" };
  } catch (error) {
    console.error("Sign up error:", error);
    return { success: false, message: "An error occurred during registration" };
  }
};

export const signOut = (): void => {
  // Remove user from localStorage
  localStorage.removeItem("currentUser");
};

export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem("currentUser");
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
};
