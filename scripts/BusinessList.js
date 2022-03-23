import { getBusinessData } from "./BusinessData.js";
import { Business } from "./Business.js";
import { newYorkBusinesses } from "./BusinessData.js";

const contentTarget = document.querySelector(".businessInfo")
const newYorkTarget = document.querySelector(".businessList--newYork")


export const makeBusinessList = () => {
        const businessArray = getBusinessData()
        contentTarget.innerHTML = "<h1>Active Businesses</h1>"

        businessArray.forEach(
            (businessObject) => {
                contentTarget.innerHTML += Business(businessObject) 
            }
        );
        

}

export const makeNYbusinessList = () => {
    
    newYorkTarget.innerHTML = "<h1>New York Businesses</h1>"
    newYorkBusinesses.forEach(
        (businessObject) => {
            newYorkTarget.innerHTML += Business(businessObject)
        }
    );
}
