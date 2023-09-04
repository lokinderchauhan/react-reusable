import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    // new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("/");
}