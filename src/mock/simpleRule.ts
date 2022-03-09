/*import { Mocker, AttributeType, Distribution, DataMode } from "random-mock";
import {Attribute} from "random-mock/src/util/Attribute";

function my_uniform_distribution(values: any[], probs: any[]): any {
    const prob_value = Math.random();
    let accum_prob = probs[0]
    for(let i = 0; i < probs.length; i++){
        if(prob_value < accum_prob){
            return values[i];
        }
        else
            accum_prob = accum_prob + probs[i + 1];
    }
}

export const my_rules = [
    {
        dependent: 'model',
        arguments: ['os_version'],
        effect: (os_version : any) => os_version === 'V11.0'
            ? "PXXX00"
            : os_version === 'V11.1'
            ? "PXXX01"
            : os_version === 'V11.2'
            ? "PXXX02"
            : "PXXX03",
        confidence: 0.9
    },

    {
        dependent: 'android_version',
        arguments: ['rom_version'],
        effect: (rom_version : any) => rom_version === 'PXXX00_11_A.25' || rom_version === 'PXXX00_11_A.26'
            ? "11"
            : "12",
        confidence: 0.9
    },

    {
        dependent: '1e1434dd98fa2dd9_version',
        arguments: ['channel'],
        effect: (channel : any) => channel === "ColorOS"
            ? my_uniform_distribution(['5.1.19232', '5.1.19238'], [0.3, 0.7])
            : my_uniform_distribution(['5.1.19232', '5.1.19238'], [0.8, 0.2]),
        confidence: 0.9
    },


    {
        dependent: 'sim2_carrier',
        arguments: ['sim1_carrier'],
        effect: (sim1_carrier : any) => sim1_carrier === '46000'
            ? my_uniform_distribution(["46000", "46001", "46011"], [0.2, 0.4, 0.4])
            : sim1_carrier === '46001'
            ? my_uniform_distribution(["46000", "46001", "46011"], [0.4, 0.2, 0.4])
            : my_uniform_distribution(["46000", "46001", "46011"], [0.4, 0.4, 0.2]),
        confidence: 0.9
    },

    {
        dependent: 'app_version',
        arguments: ['app_name'],
        effect: (app_name : any) => app_name === "1e1434dd98fa2dd5"
            ? my_uniform_distribution(["1", "2", "3"], [0.1, 0.6, 0.3])
            : app_name === "1e1434dd98fa2dd6"
            ? my_uniform_distribution(["1", "2", "3"], [0.2, 0.5, 0.3])
            : app_name === "1e1434dd98fa2dd7"
            ? my_uniform_distribution(["1", "2", "3"], [0.8, 0.1, 0.1])
            : app_name === "1e1434dd98fa2dd8"
            ? my_uniform_distribution(["1", "2", "3"], [0.9, 0.05, 0.05])
            : my_uniform_distribution(["1", "2", "3"], [0.1, 0.1, 0.8]),
        confidence: 0.9
    },
]*/