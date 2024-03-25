export type TypeError = {
    "data": null,
    "error": {
      "status": string, 
      "name": string, 
      "message": string, 
      "details": {
        // error info specific to the error type
      }
    }
}