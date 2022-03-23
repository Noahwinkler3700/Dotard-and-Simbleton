import { useSupplies } from "./suppliesData.js"
import { Supply } from "./supply.js"

const contentTarget = document.querySelector(".supplies")

const supplyList = () => {
    const supplyArray = useSupplies()
    contentTarget.innerHTML = "<h1>Supplies</h1>"

    supplyArray.forEach(
        (supplyObject) => {
            contentTarget.innerHTML += Supply(supplyObject)
        }
    );
}