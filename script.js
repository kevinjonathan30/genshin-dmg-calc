function calculate() {
      //baseAttack
      var baseAttack1 = Number(document.getElementById("baseAttack1").value);
      var baseAttack2 = Number(document.getElementById("baseAttack2").value);
      //Attack %
      var attack1 = Number(document.getElementById("attack1").value);
      var attack2 = Number(document.getElementById("attack2").value);
      //Attack Flat
      var attackFlat1 = Number(document.getElementById("attackFlat1").value);
      var attackFlat2 = Number(document.getElementById("attackFlat2").value);
      //Critical Rate %
      var criticalRate1 = Number(document.getElementById("criticalRate1").value);
      var criticalRate2 = Number(document.getElementById("criticalRate2").value);
      //Critical DMG %
      var criticalDmg1 = Number(document.getElementById("criticalDmg1").value);
      var criticalDmg2 = Number(document.getElementById("criticalDmg2").value);
      //Physical DMG %
      var physicalDmg1 = Number(document.getElementById("physicalDmg1").value);
      var physicalDmg2 = Number(document.getElementById("physicalDmg2").value);
      //Elemental DMG %
      var elementalDmg1 = Number(document.getElementById("elementalDmg1").value);
      var elementalDmg2 = Number(document.getElementById("elementalDmg2").value);
      //Elemental Defense Reduction %
      var elementalDefReduction1 = Number(document.getElementById("elementalDefReduction1").value);
      var elementalDefReduction2 = Number(document.getElementById("elementalDefReduction2").value);
      //Elemental Mastery Bonus %
      var elementalMasteryBonus1 = Number(document.getElementById("elementalMasteryBonus1").value);
      var elementalMasteryBonus2 = Number(document.getElementById("elementalMasteryBonus2").value);
      //Physical Defense Reduction %
      var physicalDefReduction1 = Number(document.getElementById("physicalDefReduction1").value);
      var physicalDefReduction2 = Number(document.getElementById("physicalDefReduction2").value);

      var normalAttackTotalDmg1 = ((((baseAttack1 * (1 + attack1 / 100)) + attackFlat1) * (1 + (criticalRate1 / 100 * (1 + criticalDmg1 / 100))) * (1 + physicalDmg1 / 100)) / (1 - physicalDefReduction1 / 100));
      document.getElementById("normalAttackTotalDmg1").innerHTML = normalAttackTotalDmg1.toFixed(2);

      var normalAttackTotalDmg2 = ((((baseAttack2 * (1 + attack2 / 100)) + attackFlat2) * (1 + (criticalRate2 / 100 * (1 + criticalDmg2 / 100))) * (1 + physicalDmg2 / 100)) / (1 - physicalDefReduction2 / 100));
      document.getElementById("normalAttackTotalDmg2").innerHTML = normalAttackTotalDmg2.toFixed(2);

      var normalAttackTotalDmg3 = normalAttackTotalDmg2 / normalAttackTotalDmg1 * 100;
      document.getElementById("normalAttackTotalDmg3").innerHTML = normalAttackTotalDmg3.toFixed(2);

      var elementalAttackTotalDmg1 = (((baseAttack1 * (1 + attack1 / 100)) + attackFlat1) * (1 + (criticalRate1 / 100 * (1 + criticalDmg1 / 100))) * (1 + elementalDmg1 / 100)) / (1 - elementalDefReduction1 / 100);
      document.getElementById("elementalAttackTotalDmg1").innerHTML = elementalAttackTotalDmg1.toFixed(2);

      var elementalAttackTotalDmg2 = (((baseAttack2 * (1 + attack2 / 100)) + attackFlat2) * (1 + (criticalRate2 / 100 * (1 + criticalDmg2 / 100))) * (1 + elementalDmg2 / 100)) / (1 - elementalDefReduction2 / 100);
      document.getElementById("elementalAttackTotalDmg2").innerHTML = elementalAttackTotalDmg2.toFixed(2);

      var elementalAttackTotalDmg3 = elementalAttackTotalDmg2 / elementalAttackTotalDmg1 * 100;
      document.getElementById("elementalAttackTotalDmg3").innerHTML = elementalAttackTotalDmg3.toFixed(2);

      var elementalComboTotalDmg1 = (((baseAttack1 * (1 + attack1 / 100)) + attackFlat1) * (1 + (criticalRate1 / 100 * (1 + criticalDmg1 / 100))) * (1 + elementalDmg1 / 100) * (1 + elementalMasteryBonus1 / 100)) / (1 - elementalDefReduction1 / 100);
      document.getElementById("elementalComboTotalDmg1").innerHTML = elementalComboTotalDmg1.toFixed(2);

      var elementalComboTotalDmg2 = (((baseAttack2 * (1 + attack2 / 100)) + attackFlat2) * (1 + (criticalRate2 / 100 * (1 + criticalDmg2 / 100))) * (1 + elementalDmg2 / 100) * (1 + elementalMasteryBonus2 / 100)) / (1 - elementalDefReduction2 / 100);
      document.getElementById("elementalComboTotalDmg2").innerHTML = elementalComboTotalDmg2.toFixed(2);

      var elementalComboTotalDmg3 = elementalComboTotalDmg2 / elementalComboTotalDmg1 * 100;
      document.getElementById("elementalComboTotalDmg3").innerHTML = elementalComboTotalDmg3.toFixed(2);
}