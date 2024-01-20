import axios from "axios";
import axiosInstance from "./axiosConfig";

export const searchAutoComplete = async (txt) => {
  try {
    const res = await axiosInstance.get("/autocomplete", {
      params: {
        // apiKey: "6b3c6af217d34416a7a75ad7f06771b7",
        query: txt,
        number: 10,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export const getRandomRecipes = async (num = 6) => {
  try {
    const res = axiosInstance.get("/random", {
      params: {
        number: num,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getRecipeDetail = async (id) => {
  try {
    const res = axiosInstance.get(`/${id}/information`, {
      params: {
        includeNutrition: true,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getRecipesOnSearch = async (query, offSet) => {
  try {
    const res = axiosInstance.get(`/complexSearch`, {
      params: {
        query: query,
        offset: offSet,
        addRecipeInformation: true,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
