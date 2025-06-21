const drinks = {
  INFP: "Herbal Tea – calm, creative, introspective.",
  ENFP: "Fruit Smoothie – colorful, sweet, and energetic!",
  ISTJ: "Black Coffee – efficient and straightforward.",
  ENFJ: "Chai Latte – warm, bold, and comforting.",
  INTJ: "Espresso – strong, deep, focused.",
  INFJ: "Matcha Latte – thoughtful, rare, and refined.",
  ESTJ: "Iced Coffee – practical, organized, and direct.",
  ESFJ: "Milkshake – sweet, friendly, and nostalgic.",
  ISTP: "Cold Brew – cool, adventurous, and independent.",
  ISFP: "Lavender Lemonade – artistic, gentle, and calming.",
  ENTJ: "Double Espresso – driven, bold, and powerful.",
  INTP: "Nitro Cold Brew – innovative, unique, and intellectual.",
  ESTP: "Energy Drink – bold, action-oriented, and exciting.",
  ESFP: "Bubble Tea – fun, vibrant, and outgoing.",
  ISFJ: "Hot Chocolate – caring, warm, and comforting.",
  ENTP: "Mocha – energetic, fun-loving, and always surprising.",
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
