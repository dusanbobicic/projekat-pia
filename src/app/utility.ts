
import { HttpClient } from '@angular/common/http';

export class Utility {
    static getQuestions(http:HttpClient){
        return http.get<any>('/api/surveys')
    }
}
