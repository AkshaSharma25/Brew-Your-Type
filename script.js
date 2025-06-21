const drinks = {
  INFP: "Herbal Tea – calm, creative, introspective.",
  ENFP: "Fruit Smoothie – colorful, sweet, and energetic!",
  ISTJ: "Black Coffee – efficient and straightforward.",
  ENFJ: "Chai Latte – warm, bold, and comforting.",
  INTJ: "Espresso – strong, deep, focused.",
};

function getDrink() {
  const mbti = document.getElementById("mbti").value.toUpperCase();
  const result = document.getElementById("result");

  if (drinks[mbti]) {
    result.innerHTML = `<p><strong>${mbti}</strong>: ${drinks[mbti]}</p>`;
  } else {
    result.innerHTML = "Please enter a valid MBTI type (like ENFP, INTJ)";
  }
}
