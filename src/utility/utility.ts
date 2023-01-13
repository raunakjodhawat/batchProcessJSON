/**
 * Given a number say x and sample size say n (exclusive)
 * returns a JSON array of start and end index dividing the number x into groups of n elements (if no. of elements are more than n) else divides into elements less than n
 * eg: x = 35, n = 10
 * response: [{s: 0, e: 9}, {s: 10, e: 19}, {s: 20, e: 29}, {s: 30, e: 34}]
 */

 import { IndexGroupType } from "../types/types";

 export function getInputGroupType(inputSize: number, sampleSize: number = 10, acc: IndexGroupType[] = [], start: number = 0): IndexGroupType[] {
     if (inputSize < sampleSize) {
        console.log(sampleSize); 
        acc.push({
             s: start,
             e: start + inputSize
         });
         return acc
     } else {
         acc.push({
             s: start,
             e: start + sampleSize - 1
         });
         return getInputGroupType(inputSize - sampleSize, sampleSize, acc, start + sampleSize);
     }
 }
 