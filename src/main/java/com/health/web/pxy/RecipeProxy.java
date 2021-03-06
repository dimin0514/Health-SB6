package com.health.web.pxy;

import org.springframework.stereotype.Component;

@Component("reciper")
public class RecipeProxy extends Proxy{
	public String[] recipe_link() {
		String[] links = {"https://www.10000recipe.com/recipe/6839048",
						  "https://www.10000recipe.com/recipe/6847772",
						  "https://www.10000recipe.com/recipe/6909397",
						  "https://www.10000recipe.com/recipe/6897486",
						  "https://www.10000recipe.com/recipe/6887379",
						  "https://www.10000recipe.com/recipe/6907418",
						  "https://www.10000recipe.com/recipe/6921603",
						  "https://www.10000recipe.com/recipe/6900897",
						  "https://www.10000recipe.com/recipe/6887941",
						  "https://www.10000recipe.com/recipe/6900544",
						  "https://www.10000recipe.com/recipe/6878050",
						  "https://www.10000recipe.com/recipe/6844730",
						  "https://www.10000recipe.com/recipe/6920815",
						  "https://www.10000recipe.com/recipe/6897201",
						  "https://www.10000recipe.com/recipe/1729566",
						  "https://www.10000recipe.com/recipe/6890698",
						  "https://www.10000recipe.com/recipe/6853743",
						  "https://www.10000recipe.com/recipe/6900480",
						  "https://www.10000recipe.com/recipe/6852651",
						  "https://www.10000recipe.com/recipe/6891066",
						  "https://www.10000recipe.com/recipe/6839361",
						  "https://www.10000recipe.com/recipe/3522952",
						  "https://www.10000recipe.com/recipe/6853059",
						  "https://www.10000recipe.com/recipe/2005904",
						  "https://www.10000recipe.com/recipe/6884261",
						  "https://www.10000recipe.com/recipe/6886159",
						  "https://www.10000recipe.com/recipe/6852947",
						  "https://www.10000recipe.com/recipe/2601649",
						  "https://www.10000recipe.com/recipe/6857156",
						  "https://www.10000recipe.com/recipe/2998440",
						  "https://www.10000recipe.com/recipe/6883995",
						  "https://www.10000recipe.com/recipe/6848119",
						  "https://www.10000recipe.com/recipe/2753079",
						  "https://www.10000recipe.com/recipe/6925546",
						  "https://www.10000recipe.com/recipe/6925326",
						  "https://www.10000recipe.com/recipe/6924719",
						  "https://www.10000recipe.com/recipe/6922916",
						  "https://www.10000recipe.com/recipe/6921947",
						  "https://www.10000recipe.com/recipe/6921614",
						  "https://www.10000recipe.com/recipe/6921231",
						  "https://www.10000recipe.com/recipe/6920219",
						  "https://www.10000recipe.com/recipe/6919467",
						  "https://www.10000recipe.com/recipe/6919434",
						  "https://www.10000recipe.com/recipe/6919383",
						  "https://www.10000recipe.com/recipe/6917392",
						  "https://www.10000recipe.com/recipe/6913945",
						  "https://www.10000recipe.com/recipe/6913012",
						  "https://www.10000recipe.com/recipe/6912026",
						  "https://www.10000recipe.com/recipe/6910353",
						  "https://www.10000recipe.com/recipe/6907836",
						  "https://www.10000recipe.com/recipe/6907659",
						  "https://www.10000recipe.com/recipe/6907368",
						  "https://www.10000recipe.com/recipe/6907208",
						  "https://www.10000recipe.com/recipe/6906883",
						  "https://www.10000recipe.com/recipe/6906387",
						  "https://www.10000recipe.com/recipe/6906340",
						  "https://www.10000recipe.com/recipe/6905466",
						  "https://www.10000recipe.com/recipe/6904613",
						  "https://www.10000recipe.com/recipe/6901266",
						  "https://www.10000recipe.com/recipe/6901013",
						  "https://www.10000recipe.com/recipe/6900832",
						  "https://www.10000recipe.com/recipe/6900828",
						  "https://www.10000recipe.com/recipe/6900668",
						  "https://www.10000recipe.com/recipe/6900608",
						  "https://www.10000recipe.com/recipe/6900600",
						  "https://www.10000recipe.com/recipe/6894690",
						  "https://www.10000recipe.com/recipe/6894005",
						  "https://www.10000recipe.com/recipe/6893254",
						  "https://www.10000recipe.com/recipe/6889798",
						  "https://www.10000recipe.com/recipe/6888850",
						  "https://www.10000recipe.com/recipe/6887954",
						  "https://www.10000recipe.com/recipe/6887886",
						  "https://www.10000recipe.com/recipe/6887610",
						  "https://www.10000recipe.com/recipe/6884122",
						  "https://www.10000recipe.com/recipe/6882485",
						  "https://www.10000recipe.com/recipe/6881742",
						  "https://www.10000recipe.com/recipe/6879062",
						  "https://www.10000recipe.com/recipe/6878220",
						  "https://www.10000recipe.com/recipe/6877890",
						  "https://www.10000recipe.com/recipe/6874450",
						  "https://www.10000recipe.com/recipe/6874405",
						  "https://www.10000recipe.com/recipe/6874144",
						  "https://www.10000recipe.com/recipe/6872066",
						  "https://www.10000recipe.com/recipe/6871881",
						  "https://www.10000recipe.com/recipe/6871257",
						  "https://www.10000recipe.com/recipe/6871056",
						  "https://www.10000recipe.com/recipe/6870475",
						  "https://www.10000recipe.com/recipe/6869206",
						  "https://www.10000recipe.com/recipe/6869184",
						  "https://www.10000recipe.com/recipe/6867829",
						  "https://www.10000recipe.com/recipe/6865335",
						  "https://www.10000recipe.com/recipe/6862481",
						  "https://www.10000recipe.com/recipe/6857947",
						  "https://www.10000recipe.com/recipe/6854901",
						  "https://www.10000recipe.com/recipe/6854322",
						  "https://www.10000recipe.com/recipe/6852653",
						  "https://www.10000recipe.com/recipe/6852639",
						  "https://www.10000recipe.com/recipe/6850207",
						  "https://www.10000recipe.com/recipe/6847297",
						  "https://www.10000recipe.com/recipe/6843013",
						  "https://www.10000recipe.com/recipe/6842723",
						  "https://www.10000recipe.com/recipe/6840024",
						  "https://www.10000recipe.com/recipe/6839594",
						  "https://www.10000recipe.com/recipe/6838409",
						  "https://www.10000recipe.com/recipe/6836922",
						  "https://www.10000recipe.com/recipe/6831159",
						  "https://www.10000recipe.com/recipe/6831158",
						  "https://www.10000recipe.com/recipe/6829469",
						  "https://www.10000recipe.com/recipe/6828868",
						  "https://www.10000recipe.com/recipe/6826131",
						  "https://www.10000recipe.com/recipe/6784509",
						  "https://www.10000recipe.com/recipe/6731007",
						  "https://www.10000recipe.com/recipe/6497878",
						  "https://www.10000recipe.com/recipe/6443998",
						  "https://www.10000recipe.com/recipe/6133118",
						  "https://www.10000recipe.com/recipe/6089481",
						  "https://www.10000recipe.com/recipe/5843982",
						  "https://www.10000recipe.com/recipe/5690886",
						  "https://www.10000recipe.com/recipe/5661975",
						  "https://www.10000recipe.com/recipe/5490562"};
							return links;
		}
}
