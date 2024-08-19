"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isValidateText(text) {
  return text.trim === "" || !text;
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  if (
    isValidateText(meal.title) ||
    isValidateText(meal.summary) ||
    isValidateText(meal.instructions) ||
    isValidateText(meal.creator) ||
    isValidateText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  )
    return {
      message: "Something went wrong",
    };
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
