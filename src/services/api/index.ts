import { ActionTypes } from "../../store/actions";
import { store } from "../../store";
import { UpdateApartmentsData } from "../../store/actions/apartments";
import { ApartmentsDataType } from "../../types";

class API {
  apiURL = "/mockApi";

  getApartmentsEndpoint = "/get-apartments";
  updateApartmentEndpoint = "/update-apartment";

  dispatch(action: ActionTypes) {
    store.dispatch(action);
  }

  async getApartmentsData() {
    try {
      const response = await fetch(this.apiURL + this.getApartmentsEndpoint);
      console.log("response", response);
      if (response.status !== 200) {
        console.log("response status !== 200");
        return;
      }

      const apartmentsData: ApartmentsDataType = await response.json();
      console.log("apartments data", apartmentsData);
      this.dispatch(UpdateApartmentsData(apartmentsData));

    } catch (err) {
      // dispatch error here
    }
  };

  async likeApartment(apartmentId:string, likeValue: boolean){
    try{
      const response = await fetch(this.apiURL + this.updateApartmentEndpoint, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          apartmentId,
          likeValue
        })
      });
      console.log(response)
    } catch (err){
      // dispatch error here
    }
  }
}

export default new API();
