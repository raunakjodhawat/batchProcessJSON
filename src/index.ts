import { IndexGroupType, ObjectType } from "./types/types";
import { getInputGroupType } from "./utility/utility";
import data from './tests/fixtures/fixture.json';

async function batchProcessJSON(objects: ObjectType[], cb: Function, sampleSize: number = 10, isSequentiallyProcessed: Boolean = true): Promise<any> {
    return new Promise((resolve, reject) => {
        try {
            if(isSequentiallyProcessed) {
                return resolve(sequentialProcessing(objects, sampleSize, cb));
            } else {
                return resolve(randomProcessing(objects, sampleSize, cb));
            }
        } catch (e) {
            reject(e);
        }       
    });
}

async function sequentialProcessing(objects: ObjectType[], sampleSize: number, cb: Function): Promise<any> {
    try {
        
        let results: any[] = [];
        let grouping: IndexGroupType[] = getInputGroupType(objects.length, sampleSize);
        
        for(let group of grouping) {
            for(let object of objects.slice(group.s, group.e)) {
                const result = await cb(object);
                results.push(result);
            }
        }
        return results;
    } catch(e) {
        throw e;
    }
    
}

async function randomProcessing(objects: ObjectType[], sampleSize: number, cb: Function): Promise<any> {
    try {
        let prom: Promise<any>[] = [];
        let grouping: IndexGroupType[] = getInputGroupType(objects.length, sampleSize);
        
        grouping.forEach((group) => {
            console.log(group);
            objects.slice(group.s, group.e).map((object) => {
                prom.push(cb(object));
            });
        });

        const results = await Promise.all(prom);
        return results;
    } catch(e) {
        throw e;
    }
}

export {
    batchProcessJSON
}

console.log(data);