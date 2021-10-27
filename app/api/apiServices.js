import axios from "axios";

import * as apiEndpoints from "./apiEndpoints";

import { storeUserDetails } from "../async-storage/asyncStorageServices";

import { useContext } from "react";
import UserContext from "../context/UserContext";

const baseURL = "https://czarlike.com";

const imagesURL = `${baseURL}/public/images`;
const productImagesURL = `${imagesURL}/products`;
const categoriesImagesURL = `${imagesURL}/category`;

const dummyImage1URL =
  "https://ii1.pepperfry.com/media/catalog/product/t/r/568x625/transparent-glass--hanging-lights-by-decorativeray-transparent-glass--hanging-lights-by-decorativera-sblkee.jpg";

export async function getAllCountries() {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .post(apiEndpoints.getAllCountriesEndpoint, {})
    .then((response) => {
      response.data.country.forEach((item, index) => {
        result.data.push(item);
      });
    })
    .catch((error) => {
      console.log(`Error code 0001: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0001: ${error}`;
    });

  return result;
}

export async function getStatesFromCountryId(countryId) {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .post(apiEndpoints.getStatesByCountryEndpoint, {
      country_id: countryId,
    })
    .then((response) => {
      response.data.states.forEach((item, index) => {
        result.data.push(item);
      });
    })
    .catch((error) => {
      console.log(`Error code 0002: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0002: ${error}`;
    });

  return result;
}

export async function getCitiesFromStateId(stateId) {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .post(apiEndpoints.getCitiesByStatesEndpoint, {
      state_id: stateId,
    })
    .then((response) => {
      response.data.cities.forEach((item, index) => {
        result.data.push(item);
      });
    })
    .catch((error) => {
      console.log(`Error code 0003: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0003: ${error}`;
    });

  return result;
}

export async function registerNewUser(newUserObject) {
  const result = {
    error: false,
    errorMessage: "",
    data: null,
  };

  await axios
    .post(apiEndpoints.registerNewUser, newUserObject)
    .then(async (response) => {
      const data = response.data;

      if (data.token) {
        const newUserDetails = {
          authToken: data.token,
          details: {
            id: data.user.id,
            userName: data.user.user_name,
            email: data.user.email,
            phone: data.user.phone,
            website: data.user.website,
            countryId: data.user.country_id,
            stateId: data.user.state_id,
            cityId: data.user.city_id,
          },
        };

        result.data = newUserDetails;
        await storeUserDetails(newUserDetails);
      } else {
        result.error = true;
        result.errorMessage = `Invalid credentials.`;
      }
    })
    .catch((error) => {
      console.log(`Error code 0004: ${error}`);
      result.error = true;

      const requestErrorMessages = error.response.data;

      if (true) {
        result.errorMessage = "Invalid credentials.";
      } else {
        result.errorMessage = "An error occurred. Error code 0007.";
      }
    });

  return result;
}

export async function loginUserWithEmailAndPassword(email, password) {
  const result = {
    error: false,
    errorMessage: "",
    data: null,
  };

  const userLoginCredentials = {
    email: email,
    password: password,
  };

  await axios
    .post(apiEndpoints.loginUser, userLoginCredentials)
    .then(async (response) => {
      const data = response.data;

      if (data.token) {
        const newUserDetails = {
          authToken: data.token,
          details: {
            id: data.user.id,
            userName: data.user.user_name,
            email: data.user.email,
            phone: data.user.phone,
            website: data.user.website,
            countryId: data.user.country_id,
            stateId: data.user.state_id,
            cityId: data.user.city_id,
          },
        };

        result.data = newUserDetails;
        await storeUserDetails(newUserDetails);
      } else {
        result.error = true;
        result.errorMessage = `Invalid credentials.`;
      }
    })
    .catch((error) => {
      console.log(`Error code 0007: ${error}`);
      result.error = true;
      const requestErrorMessage = error.response.data.message[0];
      if (
        requestErrorMessage === "These credentials do not match our records."
      ) {
        result.errorMessage = "Invalid credentials.";
      } else {
        result.errorMessage = "An error occurred. Error code 0007.";
      }
    });

  return result;
}

export async function getDealsOfTheDay() {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };
  await axios
    .get(apiEndpoints.getDealsOfTheDayEndpoint)
    .then((response) => {
      response.data.dealsoftheday.forEach((item, index) => {
        result.data.push({
          id: item.id,
          name: item.name,
          offerPrice: item.offer_price,
          price: item.price,
          image: `${productImagesURL}/${item.image}`,
        });
      });
    })
    .catch((error) => {
      console.log(`Error code 0005: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0005: ${error}`;
    });

  return result;
}

export async function getFeaturedProducts() {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };
  await axios
    .get(apiEndpoints.getFeaturedProductsEndpoint)
    .then((response) => {
      response.data.featureds.forEach((item, index) => {
        result.data.push({
          id: item.id,
          name: item.name,
          offerPrice: item.offer_price,
          price: item.price,
          image: `${productImagesURL}/${item.image}`,
        });
      });
    })
    .catch((error) => {
      console.log(`Error code 0006: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0006: ${error}`;
    });

  return result;
}

export async function getCategories_Subcategories_And_Subsubcategories() {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };
  await axios
    .post(apiEndpoints.getCategories_Subcategories_And_SubsubcategoriesEndpoint)
    .then((response) => {
      response.data.categories.forEach((item, index) => {
        const category = {
          id: item.id,
          title: item.title,
          image: `${categoriesImagesURL}/${item.image}`,
          subcategories: [],
        };

        //console.log("item 0: ", item.subcategories.lenght);

        item.subcategories.forEach((item2, index2) => {
          const subcategory = {
            id: item2.id,
            title: item2.title,
            image: `${categoriesImagesURL}/${item2.image}`,
            subsubcategories: [],
          };

          item2.childcat.forEach((item3, index3) => {
            const subsubcategory = {
              id: item3.id,
              title: item3.title,
              image: `${categoriesImagesURL}/${item3.image}`,
              parentCategory: item3.parent_cat,
              parentSubcategory: item3.parent_sub_cat,
            };

            subcategory.subsubcategories.push(subsubcategory);
          });

          category.subcategories.push(subcategory);
        });

        result.data.push(category);
      });
    })
    .catch((error) => {
      console.log(`Error code 0008: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0008: ${error}`;
    });

  //console.log("Categories data: ", result.data);

  return result;
}

export async function getProductDetails(productId) {
  const body = {
    product_id: productId,
  };

  const result = {
    error: false,
    errorMessage: "",
    data: {},
  };
  await axios
    .post(apiEndpoints.getProductDetailsEndpoint, body)
    .then((response) => {
      const item = response.data.product;

      const product = {
        id: item.id,
        category: {
          id: item.product_cat.id,
          title: item.product_cat.title,
        },
        brand: {
          id: item.product_brand.id,
          name: item.product_brand.brand_name,
        },
        store: {
          id: item.store.id,
          name: item.store.store_name,
        },
        seller: {
          id: item.seller.id,
          username: item.seller.user_name,
        },
        coupons: item.coupons,
        variants: item.variants,
        ratings: item.ratings,

        categoryId: item.category_id,
        subCategoryId: item.sub_cat_id,
        subsubCategoryId: item.child_category_id,
        storeId: item.store_id,
        image: `${productImagesURL}/${item.image}`,
        vendorId: item.vender_id,
        brandId: item.brand_id,

        name: item.name,
        slug: item.slug,
        description: item.description,
        tags: item.tags,
        model: item.model,
        sku: item.sku,
        hsn: item.hsn,
        price: item.price,
        offerPrice: item.offer_price,
        type: item.type,
        duration: item.duration,
        durationType: item.duration_type,
        featured: item.featured,
        status: item.statue,
        tax: item.tax,
        codCheck: item.codcheck,
        dealsOfTheDay: item.deals_of_the_day,
        dealsTimeQ: item.dealstimeq,
        dealsExpiresAt: item.deal_expire_at,
        freeShipping: item.free_shipping,
        returnAvailable: item.return_avbl,
        proAtt: item.pro_att,
        cancelAvailable: item.cancel_avl,
        keyFeatures: item.key_features,
        vendorPrice: item.vender_price,
        vendorOfferPrice: item.vender_offer_price,
        commissionRate: item.commission_rate,
        shippingId: item.shipping_id,
        returnPolicy: item.return_policy,
        taxR: item.tax_r,
        taxName: item.tax_name,
        isColorAvailable: item.isColorAvailable,
        isSizeAvailable: item.isSizeAvailable,
      };

      result.data = product;
    })
    .catch((error) => {
      console.log(`Error code 0009: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0009: ${error}`;
    });

  //console.log("Categories data: ", result.data);

  return result;
}

export async function getAllProductsInSubSubcategory(subSubCategoryId) {
  console.log("Id: ", typeof subSubCategoryId);
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  const body = {
    child_category_id: subSubCategoryId,
  };

  console.log("Body: ", body);

  await axios
    .post(apiEndpoints.getAllProductsInSubSubcategoryEndpoint, body)
    .then((response) => {
      response.data.forEach((item, index) => {
        result.data.push({
          id: item.id,
          name: item.name,
          offerPrice: item.offer_price,
          price: item.price,
          image: `${productImagesURL}/${item.image}`,
        });
      });
    })
    .catch((error) => {
      console.log(`Error code 0012: ${error}`);
      console.log("Response: ", error.response.data);
      result.error = true;
      result.errorMessage = `Error code 0012: ${error}`;
    });

  return result;
}

//WISH LIST
export async function getProductsInWishList() {
  const body = {
    hello: "hello",
  };

  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .post(apiEndpoints.getWishlistEndpoint)
    .then((response) => {
      response.data.wishlist.forEach((item, index) => {
        result.data.push({
          wishlistItemId: item.id,
          productId: item.product_id,
          name: item.product.name,
          image: `${productImagesURL}/${item.product.image}`,
          price: parseFloat(
            item.product.price == item.product.offer_price
              ? item.product.price
              : item.product.offer_price
          ),
        });
      });
    })
    .catch((error) => {
      console.log(`Error code 0003: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0003: ${error}`;
    });

  return result;
}

export async function addProductToWishlist(productId) {
  const body = {
    product_id: productId,
  };

  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .post(apiEndpoints.addProductToWishlistEndpoint, body)
    .then((response) => {
      //if (response.data.message === "Product added to wishlist") {      }
    })
    .catch((error) => {
      console.log(`Error code 0003: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0003: ${error}`;
    });

  return result;
}

export async function removeProductFromWishlist(productId) {
  const result0 = await getProductsInWishList();

  const targetProduct = result0.data.find(
    (item) => item.productId === productId
  );

  const body = {
    wishlist_id: targetProduct.wishlistItemId,
  };

  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .post(apiEndpoints.removeProductFromWishlistEndpoint, body)
    .then((response) => {
      //if (response.data.message === "Product added to wishlist") {      }
    })
    .catch((error) => {
      console.log(`Error code 0003: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0003: ${error}`;
    });

  return result;
}

export async function checkIfProductIsInWishlist(productId) {
  const result0 = await getProductsInWishList();

  const targetProduct = result0.data.find(
    (item) => item.productId === productId
  );

  return targetProduct !== undefined;
}

//CART
export async function getCart() {
  const result = {
    error: false,
    errorMessage: "",
    data: {
      total: 0,
      items: [],
    },
  };

  await axios
    .get(apiEndpoints.getCartEndpoint)
    .then(async (response) => {
      for (const item of response.data.items) {
        //const priceFloat = parseFloat(item.cart_items.price);
        //const offerPriceFloat = parseFloat(item.cart_items.offer_price);

        //console.log("Price: ", priceFloat);
        //console.log("Offer price: ", offerPriceFloat);

        const productDetails = await getProductDetails(item.product_id);

        result.data.items.push({
          cartItemId: item.id,
          vendorId: item.vendor_id,
          productId: item.product_id,
          colorId: item.color_id,
          sizeId: item.size_id,
          name: item.cart_items.name,
          image: productDetails.data.image,
          price: parseFloat(
            item.cart_items.price == item.cart_items.offer_price
              ? item.cart_items.price
              : item.cart_items.offer_price
          ),
        });
        result.data.total += parseFloat(
          item.cart_items.price == item.cart_items.offer_price
            ? item.cart_items.price
            : item.cart_items.offer_price
        );
      }
    })
    .catch((error) => {
      console.log(`Error code 0003: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0003: ${error}`;
    });

  return result;
}

export async function checkIfProductIsInCart(productId) {
  const result0 = await getCart();

  const targetProduct = result0.data.items.find(
    (item) => item.productId === productId
  );

  return targetProduct !== undefined;
}

export async function addProductToCart(productId, variantId, vendorId) {
  const result = {
    error: false,
    errorMessage: "",
    data: {
      total: 0,
      items: [],
    },
  };

  const body = {
    product_id: productId,
    variant_id: variantId,
    vendor_id: vendorId,
  };

  await axios
    .post(apiEndpoints.addProductToCartEndpoint, body)
    .then(async (response) => {
      if (
        !(
          response.data.message === "item added to cart!" ||
          response.data.message === "product qty increases!"
        )
      ) {
        result.error = true;
      }
    })
    .catch((error) => {
      console.log(`Error code 0013: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0013: ${error}`;
    });

  return result;
}

//SEARCH
export async function getAllProductSummaries() {
  const result = {
    error: false,
    errorMessage: "",
    data: [],
  };

  await axios
    .get(apiEndpoints.getAllProductsSummariesEndpoint)
    .then(async (response) => {
      response.data.products.forEach((item, index) => {
        result.data.push({
          id: item.id,
          name: item.name,
          image: `${productImagesURL}/${item.image}`,
          price: parseFloat(
            item.price == item.offer_price ? item.price : item.offer_price
          ),
        });
      });
    })
    .catch((error) => {
      console.log(`Error code 0011: ${error}`);
      result.error = true;
      result.errorMessage = `Error code 0011: ${error}`;
    });

  return result;
}
