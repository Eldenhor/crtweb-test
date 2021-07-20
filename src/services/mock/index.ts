import { createServer, Model } from "miragejs";
import Schema from "miragejs/orm/schema";
import { seedApartmentsData } from "./mockData";

export const mockServer = () => {
  createServer({

    models: {
      apartments: Model
    },

    seeds(server) {
      server.db.loadData({
        apartments: seedApartmentsData
      });
    },

    routes() {
      this.namespace = "mockApi";
      this.timing = 300;

      this.get("/get-apartments", (schema: Schema<any>) => {
        return schema.db.apartments;
      });

      this.put("/update-apartment", async (schema, request) => {
        const id = JSON.parse(request.requestBody).apartmentId;
        const likeValue = JSON.parse(request.requestBody);

        return await schema.db.apartments.update({id: id}, {liked: likeValue});
      });
    }

  });
};
