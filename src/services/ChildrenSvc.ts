import { AxiosResponse } from "axios";
import axios from "axios-observable";
import { Observable } from "rxjs";
import { Child } from "../types/types";

export default class ChildrenService {

    private accessToken = process.env.REACT_APP_FAMLY_ACCESS_TOKEN

    public fetchChildren(groupId: string, institutionId: string): Observable<AxiosResponse<{children: Child[]}>> {
        return axios.get(`https://tryfamly.co/api/daycare/tablet/group?accessToken=${this.accessToken}&groupId=${groupId}&institutionId=${institutionId}"`)
    }

    public checkChild(childId: string, pickupTime: string, action: "checkins" | "checkout"): Observable<AxiosResponse<void>> {
        return axios.post(`https://tryfamly.co/api/v2/children/${childId}/${action}`, { accessToken: this.accessToken, pickupTime })
    }

}