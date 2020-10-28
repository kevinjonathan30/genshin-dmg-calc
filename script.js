const getValue = id => Number(document.getElementById(id).value); 
const showValue = (id, value) => document.getElementById(id).innerHTML = value.toFixed(2);

function calculate() {
      const inputs = {
            original: {
                  baseAttack: getValue("baseAttack1"),
                  attackPercent: getValue("attack1"),
                  attackFlat: getValue("attackFlat1"),
                  criticalRate: getValue("criticalRate1"), 
                  criticalDmg: getValue("criticalDmg1"),
                  physicalDmg: getValue("physicalDmg1"),
                  elementalDmg: getValue("elementalDmg1"),
                  elementalDefReduction: getValue("elementalDefReduction1"),
                  elementalMasteryBonus: getValue("elementalMasteryBonus1"),
                  physicalDefReduction: getValue("physicalDefReduction1")
            },
            comparison: {
                  baseAttack: getValue("baseAttack2"),
                  attackPercent: getValue("attack2"),
                  attackFlat: getValue("attackFlat2"),
                  criticalRate: getValue("criticalRate2"),
                  criticalDmg: getValue("criticalDmg2"),
                  physicalDmg: getValue("physicalDmg2"),
                  elementalDmg: getValue("elementalDmg2"),
                  elementalDefReduction: getValue("elementalDefReduction2"),
                  elementalMasteryBonus: getValue("elementalMasteryBonus2"),
                  physicalDefReduction: getValue("physicalDefReduction2")
            }
      }

      const outputs = {
            original: {
                  normalAttack: calculateNormalDamage(inputs.original),
                  elementalAttack: calculateElementalAttackDamage(inputs.original),
                  elementalCombo: calculateElementalComboTotalDamage(inputs.original)
            },
            comparison: {
                  normalAttack: calculateNormalDamage(inputs.comparison),
                  elementalAttack: calculateElementalAttackDamage(inputs.comparison),
                  elementalCombo: calculateElementalComboTotalDamage(inputs.comparison)
            }
      }

      const difference = {
            normalAttack: outputs.comparison.normalAttack / outputs.original.normalAttack * 100,
            elementalAttack: outputs.comparison.elementalAttack / outputs.original.elementalAttack * 100,
            elementalCombo: outputs.comparison.elementalCombo / outputs.original.elementalCombo * 100,
      }

      showOutput(outputs, difference)
}

function showOutput(outputs, difference) {
      // Original
      showValue("normalAttackTotalDmg1", outputs.original.normalAttack)
      showValue("elementalAttackTotalDmg1", outputs.original.elementalAttack)
      showValue("elementalComboTotalDmg1", outputs.original.elementalCombo)

      // Comparison
      showValue("normalAttackTotalDmg2", outputs.comparison.normalAttack)
      showValue("elementalAttackTotalDmg2", outputs.comparison.elementalAttack)
      showValue("elementalComboTotalDmg2", outputs.comparison.elementalCombo)

      // Difference
      showValue("normalAttackTotalDmg3", difference.normalAttack)
      showValue("elementalAttackTotalDmg3", difference.elementalAttack)
      showValue("elementalComboTotalDmg3", difference.elementalCombo)
}

function calculateRawPhysicalDamage(stats) {
      const base = stats.baseAttack * (1 + stats.attackPercent / 100) + stats.attackFlat
      const crit = 1 + (stats.criticalRate / 100 * (1 + stats.criticalDmg / 100))
      return base * crit;
}

function calculateRawElementalDamage(stats) {
      const rawPhysicalDamage = calculateRawPhysicalDamage(stats)
      const elementalDamage = (1 + stats.elementalDmg / 100)

      return rawPhysicalDamage * elementalDamage
}

function calculateNormalDamage(stats) {
      const rawPhysicalDamage = calculateRawPhysicalDamage(stats)
      const physicalDamage = (1 + stats.physicalDmg / 100) / (1 - stats.physicalDefReduction / 100)
     
      return rawPhysicalDamage * physicalDamage
}

function calculateElementalAttackDamage(stats) {
      const rawElementalDamage = calculateRawElementalDamage(stats)
      const elementalReduction = 1 - stats.elementalDefReduction / 100
      
      return rawElementalDamage / elementalReduction
}

function calculateElementalComboTotalDamage(stats) {
      const rawElementalDamage = calculateRawElementalDamage(stats)
      const elementalReduction = 1 - stats.elementalDefReduction / 100
      const elementalMastery = 1 + stats.elementalMasteryBonus / 100

      return rawElementalDamage * elementalMastery / elementalReduction
}