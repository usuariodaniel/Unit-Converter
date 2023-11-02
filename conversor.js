const value = prompt("Insira o valor em Metros");

const resultado = prompt(
  "Escolha para qual unidade deseja converter:\n1 - Milimetros (mm)\n2 - Centímetros  (cm)\n3 - Decímetros (dm)\n4 - Decâmetros  (dam)\n5 - Hectômetros (hm)\n6 - Quilômetros (km)"
);

switch (resultado) {
  case "1":
    alert("O resultado é " + value + "m = " + value * 1000 + "mm");
    break;
  case "2":
    alert("O resultado é " + value + "m = " + value * 100 + "cm");
    break;
  case "3":
    alert("O resultado é " + value + "m = " + value * 10 + "dm");
    break;
  case "4":
    alert("O resultado é " + value + "m = " + value / 10 + "dam");
    break;
  case "5":
    alert("O resultado é " + value + "m = " + value / 100 + "hm");
    break;
  case "6":
    alert("O resultado é " + value + "m = " + value / 1000 + "km");
    break;
  default:
    alert("Opção Inválida");
}
