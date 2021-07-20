import { createServer } from "miragejs";
import Schema from "miragejs/orm/schema";
import { seedApartmentsData } from "./mockData";

export const mockServer = () => {
  createServer({

    seeds(server) {
      server.db.loadData({
        apartments: seedApartmentsData
      });
    },

    routes() {
      this.namespace = "mockApi";
      this.timing = 300;

      this.get("/get-apartments", (schema: Schema<any>) => {
        try {
          return schema.db.apartments;
        } catch (err) {
          return {status: null};
        }
      });

      this.put("/update-apartment", (schema: Schema<any>, request) => {
        try {
          const id = JSON.parse(request.requestBody).apartmentId;
          const likeValue = JSON.parse(request.requestBody).likeValue;

          const apartment = schema.find("apartments", id);
          apartment?.update({like: likeValue});
          console.log("db state: ", schema.db.apartments)

          return {status: apartment};
        } catch (err) {
          return {status: null};
        }
      });
    },

  });
};
