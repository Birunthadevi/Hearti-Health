export interface TotalPrediction
{
    date: string ;
    value: number ;
    delta : {
        up: boolean;
        value: number;
    };    
      
        comparison: {
            prevDate : string;
            prevValue : number;
            nextDate: string;
            nextValue: number;
        }
} 