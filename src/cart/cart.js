let cartsContainer = document.querySelector(".cart__items");

let API_PATH = "http://localhost:3000/posts";

async function fetchAPI(api) {
  const response = await fetch(api)
    .then((res) => res.json())
    .then((data) => data);
  if (response) {
    console.log(response);

    response.forEach((product, idx) => {
      let productDiv = document.createElement("div");
      productDiv.classList.add("cart__item");
      productDiv.innerHTML = `
                <span class="text-xs">Uzum Market omborida</span>
                <h3 class="text-xl font-semibold leading-5">
                  something iphone 25 extreme
                </h3>
                <div class="flex items-start py-6 gap-3">
                  <input type="checkbox" name="active" class="self-center" />
                  <img
                    class="w-[6.2rem] h-[6.2rem] object-contain"
                    src="${product.img}"
                    alt=""
                  />
                  <div class="w-full">
                    <div class="flex items-center justify-between gap-6">
                      <p class="title font-light">
                       ${product.title}
                      </p>
                      <div
                        class="delete opacity-55 hover:opacity-100 duration-200 cursor-pointer"
                      >
                        <i class="fa-solid fa-trash-can"></i> Yo'q qilish
                      </div>
                    </div>
                    <div class="flex items-center justify-between gap-3">
                      <p class="font-light text-sm">
                        <span class="salesman-txt">Sotuvchi:</span>
                        <span class=""> ООО Biznes Aziya</span>
                      </p>
                      <div class="counter border">
                        <button class="w-10 h-10">
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="text"
                          class="w-8 text-center border-none outline-none"
                          value="0"
                        />
                        <button class="w-10 h-10">
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <div class="price">
                        <h3 class="text-xl">${product.price} so'm</h3>
                        <p class="text-end text-sm line-through">${product.old_price} so'm</p>
                      </div>
                    </div>
                  </div>
                </div>
        `;
      cartsContainer.append(productDiv);
    });
  }
}

fetchAPI(API_PATH);
