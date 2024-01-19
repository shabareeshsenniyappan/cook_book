import React from "react";
import styles from "./recipeDetails.module.css";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import clock from "../../Utils/Icons/clock.png";
import calories from "../../Utils/Icons/calories.png";
import vegetarian from "../../Utils/Icons/vegetarian.png";
import nonVeg from "../../Utils/Icons/non-veg.png";
import sugar from "../../Utils/Icons/sugar.png";
import nonFav from "../../Utils/Icons/fav.png";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
function RecipeDetails() {
  let { id } = useParams();

  console.log(id, "ll");
  //   console.log(name, "ll");
  const resDetail = {
    vegetarian: true,
    vegan: false,
    glutenFree: false,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: true,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 26,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 1669,
    healthScore: 2,
    creditsText: "Jen West",
    sourceName: "Pink When",
    pricePerServing: 92.47,
    extendedIngredients: [
      {
        id: 20081,
        aisle: "Baking",
        image: "flour.png",
        consistency: "SOLID",
        name: "all purpose flour",
        nameClean: "wheat flour",
        original: "2/3 cup all purpose flour",
        originalName: "all purpose flour",
        amount: 0.6666667,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.6666667,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 83.333,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 10018617,
        aisle: "Baking",
        image: "graham-crackers.jpg",
        consistency: "SOLID",
        name: "graham cracker crumbs",
        nameClean: "graham cracker crumbs",
        original: "1 cup crushed graham cracker crumbs",
        originalName: "crushed graham cracker crumbs",
        amount: 1.0,
        unit: "cup",
        meta: ["crushed"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "cup",
            unitLong: "cup",
          },
          metric: {
            amount: 84.0,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },
      {
        id: 1009159,
        aisle: "Produce",
        image: "zest-lime.jpg",
        consistency: "SOLID",
        name: "lime zest",
        nameClean: "lime peel",
        original:
          "2 drop Lime essential oil (this is the brand I use) OR if not using essential oils, use 1 Tbsp grated lime zest.",
        originalName:
          "Lime essential oil (this is the brand I use) OR if not using essential oils, use 1 Tbsp grated lime zest",
        amount: 2.0,
        unit: "drop",
        meta: ["grated", "(this is the brand I use)"],
        measures: {
          us: {
            amount: 2.0,
            unitShort: "drop",
            unitLong: "drops",
          },
          metric: {
            amount: 2.0,
            unitShort: "drop",
            unitLong: "drops",
          },
        },
      },
      {
        id: 19335,
        aisle: "Baking",
        image: "sugar-in-bowl.png",
        consistency: "SOLID",
        name: "sugar",
        nameClean: "sugar",
        original: "2 tbsp sugar",
        originalName: "sugar",
        amount: 2.0,
        unit: "tbsp",
        meta: [],
        measures: {
          us: {
            amount: 2.0,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 2.0,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
      {
        id: 1145,
        aisle: "Milk, Eggs, Other Dairy",
        image: "butter-sliced.jpg",
        consistency: "SOLID",
        name: "butter",
        nameClean: "unsalted butter",
        original: "5 Tbsp unsalted butter (softened)",
        originalName: "unsalted butter (softened)",
        amount: 5.0,
        unit: "Tbsp",
        meta: ["unsalted", "softened", "()"],
        measures: {
          us: {
            amount: 5.0,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
          metric: {
            amount: 5.0,
            unitShort: "Tbsps",
            unitLong: "Tbsps",
          },
        },
      },
    ],
    id: 715381,
    title: "Creamy Lime Pie Square Bites",
    readyInMinutes: 45,
    servings: 2,
    sourceUrl: "http://www.pinkwhen.com/creamy-lime-pie-square-bites/",
    image: "https://spoonacular.com/recipeImages/715381-556x370.jpg",
    imageType: "jpg",
    nutrition: {
      nutrients: [
        {
          name: "Calories",
          amount: 630.78,
          unit: "kcal",
          percentOfDailyNeeds: 31.54,
        },
        {
          name: "Fat",
          amount: 33.44,
          unit: "g",
          percentOfDailyNeeds: 51.45,
        },
        {
          name: "Saturated Fat",
          amount: 18.96,
          unit: "g",
          percentOfDailyNeeds: 118.47,
        },
        {
          name: "Carbohydrates",
          amount: 75.88,
          unit: "g",
          percentOfDailyNeeds: 25.29,
        },
        {
          name: "Net Carbohydrates",
          amount: 73.3,
          unit: "g",
          percentOfDailyNeeds: 26.65,
        },
        {
          name: "Sugar",
          amount: 21.79,
          unit: "g",
          percentOfDailyNeeds: 24.21,
        },
        {
          name: "Cholesterol",
          amount: 76.33,
          unit: "mg",
          percentOfDailyNeeds: 25.44,
        },
        {
          name: "Sodium",
          amount: 281.66,
          unit: "mg",
          percentOfDailyNeeds: 12.25,
        },
        {
          name: "Protein",
          amount: 7.55,
          unit: "g",
          percentOfDailyNeeds: 15.1,
        },
        {
          name: "Vitamin B1",
          amount: 0.42,
          unit: "mg",
          percentOfDailyNeeds: 28.33,
        },
        {
          name: "Folate",
          amount: 96.72,
          unit: "µg",
          percentOfDailyNeeds: 24.18,
        },
        {
          name: "Selenium",
          amount: 14.56,
          unit: "µg",
          percentOfDailyNeeds: 20.79,
        },
        {
          name: "Iron",
          amount: 3.69,
          unit: "mg",
          percentOfDailyNeeds: 20.48,
        },
        {
          name: "Vitamin B3",
          amount: 4.06,
          unit: "mg",
          percentOfDailyNeeds: 20.32,
        },
        {
          name: "Vitamin B2",
          amount: 0.32,
          unit: "mg",
          percentOfDailyNeeds: 18.89,
        },
        {
          name: "Vitamin A",
          amount: 887.65,
          unit: "IU",
          percentOfDailyNeeds: 17.75,
        },
        {
          name: "Manganese",
          amount: 0.29,
          unit: "mg",
          percentOfDailyNeeds: 14.31,
        },
        {
          name: "Phosphorus",
          amount: 138.54,
          unit: "mg",
          percentOfDailyNeeds: 13.85,
        },
        {
          name: "Fiber",
          amount: 2.58,
          unit: "g",
          percentOfDailyNeeds: 10.32,
        },
        {
          name: "Magnesium",
          amount: 34.72,
          unit: "mg",
          percentOfDailyNeeds: 8.68,
        },
        {
          name: "Zinc",
          amount: 1.14,
          unit: "mg",
          percentOfDailyNeeds: 7.6,
        },
        {
          name: "Vitamin E",
          amount: 0.85,
          unit: "mg",
          percentOfDailyNeeds: 5.67,
        },
        {
          name: "Calcium",
          amount: 48.4,
          unit: "mg",
          percentOfDailyNeeds: 4.84,
        },
        {
          name: "Copper",
          amount: 0.08,
          unit: "mg",
          percentOfDailyNeeds: 3.99,
        },
        {
          name: "Potassium",
          amount: 128.7,
          unit: "mg",
          percentOfDailyNeeds: 3.68,
        },
        {
          name: "Vitamin D",
          amount: 0.53,
          unit: "µg",
          percentOfDailyNeeds: 3.55,
        },
        {
          name: "Vitamin B6",
          amount: 0.06,
          unit: "mg",
          percentOfDailyNeeds: 3.09,
        },
        {
          name: "Vitamin K",
          amount: 2.62,
          unit: "µg",
          percentOfDailyNeeds: 2.49,
        },
        {
          name: "Vitamin B5",
          amount: 0.22,
          unit: "mg",
          percentOfDailyNeeds: 2.24,
        },
        {
          name: "Vitamin B12",
          amount: 0.06,
          unit: "µg",
          percentOfDailyNeeds: 1.01,
        },
      ],
      properties: [
        {
          name: "Glycemic Index",
          amount: 125.55,
          unit: "",
        },
        {
          name: "Glycemic Load",
          amount: 54.03,
          unit: "",
        },
        {
          name: "Inflammation Score",
          amount: -7.0,
          unit: "",
        },
        {
          name: "Nutrition Score",
          amount: 10.278695652173914,
          unit: "%",
        },
      ],
      flavonoids: [
        {
          name: "Cyanidin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Petunidin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Delphinidin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Malvidin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Pelargonidin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Peonidin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Catechin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Epigallocatechin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Epicatechin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Epicatechin 3-gallate",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Epigallocatechin 3-gallate",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Theaflavin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Thearubigins",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Eriodictyol",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Hesperetin",
          amount: 0.43,
          unit: "mg",
        },
        {
          name: "Naringenin",
          amount: 0.03,
          unit: "mg",
        },
        {
          name: "Apigenin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Luteolin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Isorhamnetin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Kaempferol",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Myricetin",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Quercetin",
          amount: 0.0,
          unit: "mg",
        },
        {
          name: "Theaflavin-3,3'-digallate",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Theaflavin-3'-gallate",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Theaflavin-3-gallate",
          amount: 0.0,
          unit: "",
        },
        {
          name: "Gallocatechin",
          amount: 0.0,
          unit: "",
        },
      ],
      ingredients: [
        {
          id: 20081,
          name: "all purpose flour",
          amount: 0.33,
          unit: "cup",
          nutrients: [
            {
              name: "Vitamin B6",
              amount: 0.02,
              unit: "mg",
              percentOfDailyNeeds: 3.09,
            },
            {
              name: "Mono Unsaturated Fat",
              amount: 0.04,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin D",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 3.55,
            },
            {
              name: "Choline",
              amount: 4.33,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin B3",
              amount: 2.46,
              unit: "mg",
              percentOfDailyNeeds: 20.32,
            },
            {
              name: "Caffeine",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin E",
              amount: 0.03,
              unit: "mg",
              percentOfDailyNeeds: 5.67,
            },
            {
              name: "Potassium",
              amount: 44.58,
              unit: "mg",
              percentOfDailyNeeds: 3.68,
            },
            {
              name: "Sugar",
              amount: 0.11,
              unit: "g",
              percentOfDailyNeeds: 24.21,
            },
            {
              name: "Net Carbohydrates",
              amount: 30.67,
              unit: "g",
              percentOfDailyNeeds: 26.65,
            },
            {
              name: "Cholesterol",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 25.44,
            },
            {
              name: "Vitamin K",
              amount: 0.13,
              unit: "µg",
              percentOfDailyNeeds: 2.49,
            },
            {
              name: "Vitamin B5",
              amount: 0.18,
              unit: "mg",
              percentOfDailyNeeds: 2.24,
            },
            {
              name: "Fat",
              amount: 0.41,
              unit: "g",
              percentOfDailyNeeds: 51.45,
            },
            {
              name: "Vitamin B12",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 1.01,
            },
            {
              name: "Alcohol",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Copper",
              amount: 0.06,
              unit: "mg",
              percentOfDailyNeeds: 3.99,
            },
            {
              name: "Vitamin B2",
              amount: 0.21,
              unit: "mg",
              percentOfDailyNeeds: 18.89,
            },
            {
              name: "Zinc",
              amount: 0.29,
              unit: "mg",
              percentOfDailyNeeds: 7.6,
            },
            {
              name: "Sodium",
              amount: 0.83,
              unit: "mg",
              percentOfDailyNeeds: 12.25,
            },
            {
              name: "Manganese",
              amount: 0.28,
              unit: "mg",
              percentOfDailyNeeds: 14.31,
            },
            {
              name: "Lycopene",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Saturated Fat",
              amount: 0.06,
              unit: "g",
              percentOfDailyNeeds: 118.47,
            },
            {
              name: "Poly Unsaturated Fat",
              amount: 0.17,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Folate",
              amount: 76.25,
              unit: "µg",
              percentOfDailyNeeds: 24.18,
            },
            {
              name: "Iron",
              amount: 1.93,
              unit: "mg",
              percentOfDailyNeeds: 20.48,
            },
            {
              name: "Phosphorus",
              amount: 45.0,
              unit: "mg",
              percentOfDailyNeeds: 13.85,
            },
            {
              name: "Vitamin B1",
              amount: 0.33,
              unit: "mg",
              percentOfDailyNeeds: 28.33,
            },
            {
              name: "Magnesium",
              amount: 9.17,
              unit: "mg",
              percentOfDailyNeeds: 8.68,
            },
            {
              name: "Carbohydrates",
              amount: 31.8,
              unit: "g",
              percentOfDailyNeeds: 25.29,
            },
            {
              name: "Protein",
              amount: 4.3,
              unit: "g",
              percentOfDailyNeeds: 15.1,
            },
            {
              name: "Folic Acid",
              amount: 64.17,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin A",
              amount: 0.0,
              unit: "IU",
              percentOfDailyNeeds: 17.75,
            },
            {
              name: "Fiber",
              amount: 1.13,
              unit: "g",
              percentOfDailyNeeds: 10.32,
            },
            {
              name: "Calcium",
              amount: 6.25,
              unit: "mg",
              percentOfDailyNeeds: 4.84,
            },
            {
              name: "Calories",
              amount: 151.67,
              unit: "kcal",
              percentOfDailyNeeds: 31.54,
            },
            {
              name: "Vitamin C",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.35,
            },
            {
              name: "Selenium",
              amount: 14.13,
              unit: "µg",
              percentOfDailyNeeds: 20.79,
            },
          ],
        },
        {
          id: 10018617,
          name: "graham cracker crumbs",
          amount: 0.5,
          unit: "cup",
          nutrients: [
            {
              name: "Vitamin B6",
              amount: 0.04,
              unit: "mg",
              percentOfDailyNeeds: 3.09,
            },
            {
              name: "Mono Unsaturated Fat",
              amount: 1.51,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin B3",
              amount: 1.59,
              unit: "mg",
              percentOfDailyNeeds: 20.32,
            },
            {
              name: "Potassium",
              amount: 74.34,
              unit: "mg",
              percentOfDailyNeeds: 3.68,
            },
            {
              name: "Sugar",
              amount: 9.66,
              unit: "g",
              percentOfDailyNeeds: 24.21,
            },
            {
              name: "Net Carbohydrates",
              amount: 30.58,
              unit: "g",
              percentOfDailyNeeds: 26.65,
            },
            {
              name: "Fat",
              amount: 4.2,
              unit: "g",
              percentOfDailyNeeds: 51.45,
            },
            {
              name: "Cholesterol",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 25.44,
            },
            {
              name: "Copper",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 3.99,
            },
            {
              name: "Vitamin B2",
              amount: 0.1,
              unit: "mg",
              percentOfDailyNeeds: 18.89,
            },
            {
              name: "Zinc",
              amount: 0.81,
              unit: "mg",
              percentOfDailyNeeds: 7.6,
            },
            {
              name: "Sodium",
              amount: 276.78,
              unit: "mg",
              percentOfDailyNeeds: 12.25,
            },
            {
              name: "Saturated Fat",
              amount: 0.66,
              unit: "g",
              percentOfDailyNeeds: 118.47,
            },
            {
              name: "Poly Unsaturated Fat",
              amount: 0.19,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Iron",
              amount: 1.73,
              unit: "mg",
              percentOfDailyNeeds: 20.48,
            },
            {
              name: "Phosphorus",
              amount: 84.84,
              unit: "mg",
              percentOfDailyNeeds: 13.85,
            },
            {
              name: "Vitamin B1",
              amount: 0.1,
              unit: "mg",
              percentOfDailyNeeds: 28.33,
            },
            {
              name: "Folate",
              amount: 19.32,
              unit: "µg",
              percentOfDailyNeeds: 24.18,
            },
            {
              name: "Magnesium",
              amount: 24.78,
              unit: "mg",
              percentOfDailyNeeds: 8.68,
            },
            {
              name: "Carbohydrates",
              amount: 32.0,
              unit: "g",
              percentOfDailyNeeds: 25.29,
            },
            {
              name: "Protein",
              amount: 2.94,
              unit: "g",
              percentOfDailyNeeds: 15.1,
            },
            {
              name: "Vitamin A",
              amount: 0.0,
              unit: "IU",
              percentOfDailyNeeds: 17.75,
            },
            {
              name: "Calcium",
              amount: 33.18,
              unit: "mg",
              percentOfDailyNeeds: 4.84,
            },
            {
              name: "Calories",
              amount: 178.08,
              unit: "kcal",
              percentOfDailyNeeds: 31.54,
            },
            {
              name: "Vitamin C",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.35,
            },
            {
              name: "Fiber",
              amount: 1.43,
              unit: "g",
              percentOfDailyNeeds: 10.32,
            },
          ],
        },
        {
          id: 1009159,
          name: "lime zest",
          amount: 1.0,
          unit: "drop",
          nutrients: [
            {
              name: "Vitamin B6",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 3.09,
            },
            {
              name: "Mono Unsaturated Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin D",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 3.55,
            },
            {
              name: "Choline",
              amount: 0.05,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin B3",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 20.32,
            },
            {
              name: "Caffeine",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin E",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 5.67,
            },
            {
              name: "Potassium",
              amount: 1.02,
              unit: "mg",
              percentOfDailyNeeds: 3.68,
            },
            {
              name: "Sugar",
              amount: 0.02,
              unit: "g",
              percentOfDailyNeeds: 24.21,
            },
            {
              name: "Net Carbohydrates",
              amount: 0.08,
              unit: "g",
              percentOfDailyNeeds: 26.65,
            },
            {
              name: "Cholesterol",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 25.44,
            },
            {
              name: "Vitamin K",
              amount: 0.01,
              unit: "µg",
              percentOfDailyNeeds: 2.49,
            },
            {
              name: "Vitamin B5",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 2.24,
            },
            {
              name: "Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 51.45,
            },
            {
              name: "Vitamin B12",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 1.01,
            },
            {
              name: "Alcohol",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Copper",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 3.99,
            },
            {
              name: "Vitamin B2",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 18.89,
            },
            {
              name: "Zinc",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 7.6,
            },
            {
              name: "Sodium",
              amount: 0.02,
              unit: "mg",
              percentOfDailyNeeds: 12.25,
            },
            {
              name: "Manganese",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 14.31,
            },
            {
              name: "Lycopene",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Saturated Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 118.47,
            },
            {
              name: "Poly Unsaturated Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Folate",
              amount: 0.08,
              unit: "µg",
              percentOfDailyNeeds: 24.18,
            },
            {
              name: "Iron",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 20.48,
            },
            {
              name: "Phosphorus",
              amount: 0.18,
              unit: "mg",
              percentOfDailyNeeds: 13.85,
            },
            {
              name: "Vitamin B1",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 28.33,
            },
            {
              name: "Magnesium",
              amount: 0.06,
              unit: "mg",
              percentOfDailyNeeds: 8.68,
            },
            {
              name: "Carbohydrates",
              amount: 0.1,
              unit: "g",
              percentOfDailyNeeds: 25.29,
            },
            {
              name: "Protein",
              amount: 0.01,
              unit: "g",
              percentOfDailyNeeds: 15.1,
            },
            {
              name: "Folic Acid",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin A",
              amount: 0.5,
              unit: "IU",
              percentOfDailyNeeds: 17.75,
            },
            {
              name: "Fiber",
              amount: 0.03,
              unit: "g",
              percentOfDailyNeeds: 10.32,
            },
            {
              name: "Calcium",
              amount: 0.33,
              unit: "mg",
              percentOfDailyNeeds: 4.84,
            },
            {
              name: "Calories",
              amount: 0.3,
              unit: "kcal",
              percentOfDailyNeeds: 31.54,
            },
            {
              name: "Vitamin C",
              amount: 0.29,
              unit: "mg",
              percentOfDailyNeeds: 0.35,
            },
            {
              name: "Selenium",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 20.79,
            },
          ],
        },
        {
          id: 19335,
          name: "sugar",
          amount: 1.0,
          unit: "tbsp",
          nutrients: [
            {
              name: "Vitamin B6",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 3.09,
            },
            {
              name: "Mono Unsaturated Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin D",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 3.55,
            },
            {
              name: "Choline",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin B3",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 20.32,
            },
            {
              name: "Caffeine",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin E",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 5.67,
            },
            {
              name: "Potassium",
              amount: 0.24,
              unit: "mg",
              percentOfDailyNeeds: 3.68,
            },
            {
              name: "Sugar",
              amount: 11.98,
              unit: "g",
              percentOfDailyNeeds: 24.21,
            },
            {
              name: "Net Carbohydrates",
              amount: 11.95,
              unit: "g",
              percentOfDailyNeeds: 26.65,
            },
            {
              name: "Cholesterol",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 25.44,
            },
            {
              name: "Vitamin K",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 2.49,
            },
            {
              name: "Vitamin B5",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 2.24,
            },
            {
              name: "Fat",
              amount: 0.04,
              unit: "g",
              percentOfDailyNeeds: 51.45,
            },
            {
              name: "Vitamin B12",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 1.01,
            },
            {
              name: "Alcohol",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Copper",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 3.99,
            },
            {
              name: "Vitamin B2",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 18.89,
            },
            {
              name: "Zinc",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 7.6,
            },
            {
              name: "Sodium",
              amount: 0.12,
              unit: "mg",
              percentOfDailyNeeds: 12.25,
            },
            {
              name: "Manganese",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 14.31,
            },
            {
              name: "Lycopene",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Saturated Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 118.47,
            },
            {
              name: "Poly Unsaturated Fat",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Fluoride",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Folate",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 24.18,
            },
            {
              name: "Iron",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 20.48,
            },
            {
              name: "Phosphorus",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 13.85,
            },
            {
              name: "Vitamin B1",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 28.33,
            },
            {
              name: "Magnesium",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 8.68,
            },
            {
              name: "Carbohydrates",
              amount: 11.95,
              unit: "g",
              percentOfDailyNeeds: 25.29,
            },
            {
              name: "Protein",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 15.1,
            },
            {
              name: "Folic Acid",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin A",
              amount: 0.0,
              unit: "IU",
              percentOfDailyNeeds: 17.75,
            },
            {
              name: "Fiber",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 10.32,
            },
            {
              name: "Calcium",
              amount: 0.12,
              unit: "mg",
              percentOfDailyNeeds: 4.84,
            },
            {
              name: "Calories",
              amount: 46.2,
              unit: "kcal",
              percentOfDailyNeeds: 31.54,
            },
            {
              name: "Vitamin C",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.35,
            },
            {
              name: "Selenium",
              amount: 0.07,
              unit: "µg",
              percentOfDailyNeeds: 20.79,
            },
          ],
        },
        {
          id: 1145,
          name: "butter",
          amount: 2.5,
          unit: "Tbsp",
          nutrients: [
            {
              name: "Vitamin B6",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 3.09,
            },
            {
              name: "Mono Unsaturated Fat",
              amount: 7.46,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin D",
              amount: 0.53,
              unit: "µg",
              percentOfDailyNeeds: 3.55,
            },
            {
              name: "Choline",
              amount: 6.67,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin B3",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 20.32,
            },
            {
              name: "Caffeine",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin E",
              amount: 0.82,
              unit: "mg",
              percentOfDailyNeeds: 5.67,
            },
            {
              name: "Potassium",
              amount: 8.52,
              unit: "mg",
              percentOfDailyNeeds: 3.68,
            },
            {
              name: "Sugar",
              amount: 0.02,
              unit: "g",
              percentOfDailyNeeds: 24.21,
            },
            {
              name: "Net Carbohydrates",
              amount: 0.02,
              unit: "g",
              percentOfDailyNeeds: 26.65,
            },
            {
              name: "Cholesterol",
              amount: 76.32,
              unit: "mg",
              percentOfDailyNeeds: 25.44,
            },
            {
              name: "Vitamin K",
              amount: 2.48,
              unit: "µg",
              percentOfDailyNeeds: 2.49,
            },
            {
              name: "Vitamin B5",
              amount: 0.04,
              unit: "mg",
              percentOfDailyNeeds: 2.24,
            },
            {
              name: "Fat",
              amount: 28.79,
              unit: "g",
              percentOfDailyNeeds: 51.45,
            },
            {
              name: "Vitamin B12",
              amount: 0.06,
              unit: "µg",
              percentOfDailyNeeds: 1.01,
            },
            {
              name: "Alcohol",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Copper",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 3.99,
            },
            {
              name: "Vitamin B2",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 18.89,
            },
            {
              name: "Zinc",
              amount: 0.03,
              unit: "mg",
              percentOfDailyNeeds: 7.6,
            },
            {
              name: "Sodium",
              amount: 3.9,
              unit: "mg",
              percentOfDailyNeeds: 12.25,
            },
            {
              name: "Manganese",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 14.31,
            },
            {
              name: "Lycopene",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Poly Unsaturated Fat",
              amount: 1.08,
              unit: "g",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Saturated Fat",
              amount: 18.24,
              unit: "g",
              percentOfDailyNeeds: 118.47,
            },
            {
              name: "Trans Fat",
              amount: 1.16,
              unit: "g",
              percentOfDailyNeeds: 11636.9,
            },
            {
              name: "Fluoride",
              amount: 0.99,
              unit: "mg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Folate",
              amount: 1.07,
              unit: "µg",
              percentOfDailyNeeds: 24.18,
            },
            {
              name: "Iron",
              amount: 0.01,
              unit: "mg",
              percentOfDailyNeeds: 20.48,
            },
            {
              name: "Phosphorus",
              amount: 8.52,
              unit: "mg",
              percentOfDailyNeeds: 13.85,
            },
            {
              name: "Vitamin B1",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 28.33,
            },
            {
              name: "Magnesium",
              amount: 0.71,
              unit: "mg",
              percentOfDailyNeeds: 8.68,
            },
            {
              name: "Carbohydrates",
              amount: 0.02,
              unit: "g",
              percentOfDailyNeeds: 25.29,
            },
            {
              name: "Protein",
              amount: 0.3,
              unit: "g",
              percentOfDailyNeeds: 15.1,
            },
            {
              name: "Folic Acid",
              amount: 0.0,
              unit: "µg",
              percentOfDailyNeeds: 0.0,
            },
            {
              name: "Vitamin A",
              amount: 887.15,
              unit: "IU",
              percentOfDailyNeeds: 17.75,
            },
            {
              name: "Fiber",
              amount: 0.0,
              unit: "g",
              percentOfDailyNeeds: 10.32,
            },
            {
              name: "Calcium",
              amount: 8.52,
              unit: "mg",
              percentOfDailyNeeds: 4.84,
            },
            {
              name: "Calories",
              amount: 254.54,
              unit: "kcal",
              percentOfDailyNeeds: 31.54,
            },
            {
              name: "Vitamin C",
              amount: 0.0,
              unit: "mg",
              percentOfDailyNeeds: 0.35,
            },
            {
              name: "Selenium",
              amount: 0.35,
              unit: "µg",
              percentOfDailyNeeds: 20.79,
            },
          ],
        },
      ],
      caloricBreakdown: {
        percentProtein: 4.76,
        percentFat: 47.42,
        percentCarbs: 47.82,
      },
      weightPerServing: {
        amount: 132,
        unit: "g",
      },
    },
    summary:
      'Creamy Lime Pie Square Bites might be just the dessert you are searching for. One serving contains <b>631 calories</b>, <b>8g of protein</b>, and <b>33g of fat</b>. This lacto ovo vegetarian recipe serves 2 and costs <b>92 cents per serving</b>. It is brought to you by Pink When. 1669 people were impressed by this recipe. A mixture of all purpose flour, graham cracker crumbs, lime zest, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 42%</b>. This score is good. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/creamy-lime-pie-square-bites-1269739">Creamy Lime Pie Square Bites</a>, <a href="https://spoonacular.com/recipes/creamy-lime-and-coconut-truffle-bites-53822">Creamy Lime And Coconut Truffle Bites</a>, and <a href="https://spoonacular.com/recipes/key-lime-pie-bites-603650">Key Lime Pie Bites</a>.',
    cuisines: [],
    dishTypes: ["dessert"],
    diets: ["lacto ovo vegetarian"],
    occasions: [],
    winePairing: {
      pairedWines: [
        "port",
        "vin santo",
        "late harvest riesling",
        "lambrusco dolce",
      ],
      pairingText:
        "Port, Vin Santo, and Late Harvest Riesling are my top picks for Pie. These wines are all sweet, which is important since wine should usually be sweeter than the food you're pairing with it. You could try Santa Medina Port Wine .. Reviewers quite like it with a 5 out of 5 star rating and a price of about 12 dollars per bottle.",
      productMatches: [
        {
          id: 428205,
          title: "Santa Medina Port Wine .",
          description: "blackberry,dark molasses,creamy caramel",
          price: "$12.0",
          imageUrl: "https://spoonacular.com/productImages/428205-312x231.jpg",
          averageRating: 1.0,
          ratingCount: 1.0,
          score: 0.75,
          link: "https://www.amazon.com/Santa-Medina-California-Port-Wine/dp/B06XGN5QQG?tag=spoonacular-20",
        },
      ],
    },
    instructions:
      "Preheat oven to 350. Cover an 88 glass square dish with foil.Whisk together all of your crust ingredients until it becomes a grainy consistency. Take a spoon and press the graham crust into the foil making sure all of the edges and bottom are completely covered.Place into the oven and bake for 10-15 minutes until browned. Remove from oven and allow to cool for about an hour.For the filling, add all of your ingredients into a medium bowl and mix well for about 30 minutes, and then for 3 minutes on low. Place into the graham cracker crust, making sure all of the edges are filled.Bake in the oven for about 5-10 minutes, and then remove. Place onto a cooling rack for about 15 minutes, and then chill in the refrigerator for remaining 45 minutes to set.To serve, remove carefully from dish with foil and cut into bite sized squares.Looking for other ways to use Lime Essential Oil? A great group of bloggers and myself got together so we could share our favorite recipes to use with Lime. You dont have to use essential oils in order to make this delicious dessert, but if you have on hand, give it a try! You can find all of the other great Lime recipes below. Leave me a comment if you make these Creamy Lime Pie Square Bites and tell me if you love them as much as we do!If you have ever wanted to start using essential oils, you can read all about WHY I love to use mine here. Want to use Lime in a few different recipes? Check these additional recipes out.Coconut Lime Spritzer // Blackberry Lime Margaritas // Strawberry LimeadeCherry Lime Chia Energy Bars // Strawberry Margarita Cheesecake // Creamy Lime Pie BitesMargarita Crepe Cake //Edible Watermelon Bowl // Margarita CookiesSouthwestern Black Bean & Corn Salad // Lime Cheesecake ShootersNot all essential oils are edible. Due to lack of purity, 98% of essential oils sold should NOT be ingested. An edible essential oil will be labeled therapeutic-grade and have a Supplement Facts box on the label showing the nutritional value  do NOT use just any brand of essential oil for cooking/flavoring foods. Be sure to use pure oils from reliable sources, not synthetic scents or flavorings.JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow PinkWhen on Social Media, the PinkWhen blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First NameEmail AddressSubscribePowered by ConvertKit",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Preheat oven to 35",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
          },
          {
            number: 2,
            step: "Cover an 88 glass square dish with foil.",
            ingredients: [],
            equipment: [
              {
                id: 404765,
                name: "aluminum foil",
                localizedName: "aluminum foil",
                image: "aluminum-foil.png",
              },
            ],
          },
          {
            number: 3,
            step: "Whisk together all of your crust ingredients until it becomes a grainy consistency. Take a spoon and press the graham crust into the foil making sure all of the edges and bottom are completely covered.",
            ingredients: [
              {
                id: 0,
                name: "crust",
                localizedName: "crust",
                image: "",
              },
            ],
            equipment: [
              {
                id: 404661,
                name: "whisk",
                localizedName: "whisk",
                image: "whisk.png",
              },
              {
                id: 404765,
                name: "aluminum foil",
                localizedName: "aluminum foil",
                image: "aluminum-foil.png",
              },
            ],
          },
          {
            number: 4,
            step: "Place into the oven and bake for 10-15 minutes until browned.",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 15,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step: "Remove from oven and allow to cool for about an hour.For the filling, add all of your ingredients into a medium bowl and mix well for about 30 minutes, and then for 3 minutes on low.",
            ingredients: [],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 33,
              unit: "minutes",
            },
          },
          {
            number: 6,
            step: "Place into the graham cracker crust, making sure all of the edges are filled.",
            ingredients: [
              {
                id: 18942,
                name: "graham cracker pie crust",
                localizedName: "graham cracker pie crust",
                image: "pie-crust-graham-cracker.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 7,
            step: "Bake in the oven for about 5-10 minutes, and then remove.",
            ingredients: [],
            equipment: [
              {
                id: 404784,
                name: "oven",
                localizedName: "oven",
                image: "oven.jpg",
              },
            ],
            length: {
              number: 10,
              unit: "minutes",
            },
          },
          {
            number: 8,
            step: "Place onto a cooling rack for about 15 minutes, and then chill in the refrigerator for remaining 45 minutes to set.To serve, remove carefully from dish with foil and cut into bite sized squares.Looking for other ways to use Lime Essential Oil? A great group of bloggers and myself got together so we could share our favorite recipes to use with Lime. You dont have to use essential oils in order to make this delicious dessert, but if you have on hand, give it a try! You can find all of the other great Lime recipes below. Leave me a comment if you make these Creamy Lime Pie Square Bites and tell me if you love them as much as we do!If you have ever wanted to start using essential oils, you can read all about WHY I love to use mine here. Want to use Lime in a few different recipes? Check these additional recipes out.Coconut Lime Spritzer // Blackberry Lime Margaritas // Strawberry Limeade",
            ingredients: [
              {
                id: 9042,
                name: "blackberries",
                localizedName: "blackberries",
                image: "blackberries.jpg",
              },
              {
                id: 9316,
                name: "strawberries",
                localizedName: "strawberries",
                image: "strawberries.png",
              },
              {
                id: 0,
                name: "spritzer",
                localizedName: "spritzer",
                image: "",
              },
              {
                id: 12104,
                name: "coconut",
                localizedName: "coconut",
                image: "coconut.jpg",
              },
              {
                id: 99185,
                name: "limeade",
                localizedName: "limeade",
                image: "limeade.jpg",
              },
              {
                id: 9159,
                name: "lime",
                localizedName: "lime",
                image: "lime.jpg",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 405900,
                name: "wire rack",
                localizedName: "wire rack",
                image: "wire-rack.jpg",
              },
              {
                id: 404765,
                name: "aluminum foil",
                localizedName: "aluminum foil",
                image: "aluminum-foil.png",
              },
            ],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 9,
            step: "Cherry Lime Chia Energy Bars // Strawberry Margarita Cheesecake // Creamy Lime Pie Bites",
            ingredients: [
              {
                id: 9316,
                name: "strawberries",
                localizedName: "strawberries",
                image: "strawberries.png",
              },
              {
                id: 0,
                name: "margarita",
                localizedName: "margarita",
                image: "rum-dark.jpg",
              },
              {
                id: 9070,
                name: "cherries",
                localizedName: "cherries",
                image: "cherries.jpg",
              },
              {
                id: 9159,
                name: "lime",
                localizedName: "lime",
                image: "lime.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 10,
            step: "Margarita Crepe Cake //Edible Watermelon Bowl // Margarita Cookies",
            ingredients: [
              {
                id: 9326,
                name: "watermelon",
                localizedName: "watermelon",
                image: "watermelon.png",
              },
              {
                id: 0,
                name: "margarita",
                localizedName: "margarita",
                image: "rum-dark.jpg",
              },
              {
                id: 10118192,
                name: "cookies",
                localizedName: "cookies",
                image: "shortbread-cookies.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 11,
            step: "Southwestern Black Bean & Corn Salad // Lime Cheesecake Shooters",
            ingredients: [
              {
                id: 11168,
                name: "corn",
                localizedName: "corn",
                image: "corn.png",
              },
              {
                id: 9159,
                name: "lime",
                localizedName: "lime",
                image: "lime.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 12,
            step: "Not all essential oils are edible. Due to lack of purity, 98% of essential oils sold should NOT be ingested. An edible essential oil will be labeled therapeutic-grade and have a Supplement Facts box on the label showing the nutritional value  do NOT use just any brand of essential oil for cooking/flavoring foods. Be sure to use pure oils from reliable sources, not synthetic scents or flavorings.JOIN 500,000 SUBSCRIBERS!Join over 500,000 others who follow Pink",
            ingredients: [
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image: "vegetable-oil.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 13,
            step: "When on Social Media, the Pink",
            ingredients: [],
            equipment: [],
          },
          {
            number: 14,
            step: "When blog, and email. Sign up to receive exclusive bonuses like this FREE Simple Fit Dinners Ebook.Don't wait! You won't want to miss a thing.Success! Now check your email to confirm your subscription and download your FREE ebook.There was an error submitting your subscription. Please try again.First Name",
            ingredients: [],
            equipment: [],
          },
          {
            number: 15,
            step: "Email",
            ingredients: [],
            equipment: [],
          },
          {
            number: 16,
            step: "Address",
            ingredients: [],
            equipment: [],
          },
          {
            number: 17,
            step: "Subscribe",
            ingredients: [],
            equipment: [],
          },
          {
            number: 18,
            step: "Powered by Convert",
            ingredients: [],
            equipment: [],
          },
          {
            number: 19,
            step: "Kit",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 16.135251998901367,
    spoonacularSourceUrl:
      "https://spoonacular.com/creamy-lime-pie-square-bites-715381",
  };
  return (
    <div>
      <HeaderComponent />
      <div className={styles.deatailsContainer}>
        <div className={styles.imageContainer}>
          <img
            src={resDetail?.image}
            alt={"Detail"}
            loading={"lazy"}
            className={styles.imageStyle}
          />
          <div className={styles.infoContainer}>
            <div className={styles.infoName}>{resDetail?.title}</div>
            <div className={styles.infoNutriContainer}>
              <div className={styles.cardIconPack}>
                <img className={styles.cardIcon} src={clock} alt={"clock"} />
                <span className={styles.cardIconInfo}>
                  {resDetail?.cookingMinutes + " "} <span></span>min
                </span>
              </div>
              <div className={styles.cardIconPack}>
                <img
                  className={styles.cardIcon}
                  src={calories}
                  alt={"calories"}
                />
                <span className={styles.cardIconInfo}>
                  {Math.round(resDetail?.nutrition?.nutrients[0]?.amount) + " "}
                  Kcal
                </span>
              </div>
              <div className={styles.cardIconPack}>
                <img className={styles.cardIcon} src={sugar} alt={"sugar"} />
                <span className={styles.cardIconInfo}>
                  {Math.round(resDetail?.nutrition?.nutrients[6]?.amount) + " "}
                  g
                </span>
              </div>
              <div className={styles.cardIconPack}>
                <img
                  className={styles.cardIcon}
                  src={resDetail?.vegetarian ? vegetarian : nonVeg}
                  alt={"veg"}
                />
                <span className={styles.cardIconInfo}>
                  {resDetail?.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deatilaContainer}>
          <div className={styles.ingHeading}>Ingredients</div>
          <div className={styles.ingDetailsContainer}>
            {resDetail?.extendedIngredients?.map((ing, index) => (
              <div className={styles.ingCont} key={ing?.id}>
                <span className={styles.ingUnit}>{index + 1}</span>
                <div className={styles.ingDetailTex}>{ing?.original}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.deatilaContainer}>
          <div className={styles.ingHeading}>Instructions</div>
          <div className={styles.ingDetailsContainer}>
            {resDetail?.analyzedInstructions[0]?.steps?.map((ins, index) => (
              <div className={styles.ingCont} key={index}>
                <span className={styles.ingUnit}>{ins?.number}</span>
                <div className={styles.ingDetailTex}>{ins?.step}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.deatilaContainer}>
          <div className={styles.ingHeading}>Summary</div>
          <div className={styles.ingDetailsContainer}>
            <div
              className={styles.ingDetailTex}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(resDetail?.summary),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
