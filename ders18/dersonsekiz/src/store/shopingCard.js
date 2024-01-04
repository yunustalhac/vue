import {defineStore} from "pinia";
import {ref} from "vue";

export const storeShop = defineStore("shopp", () => {
    const items = ref([])
    const modal = ref()

    function addItem(item) {
        if (item.trim() === "") {
            return;
        }

        items.value.push(item);
        modal.value = "";
    }

    function getCount() {
        return items.value.length
    }

    return {items, getCount, addItem, modal}

})