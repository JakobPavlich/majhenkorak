// Import and register all your controllers from the importmap via controllers/**/*_controller
import { application } from "./application";

import AmbientController from "./ambient_controller";
import SnowController from "./snow_controller";

application.register("ambient", AmbientController);
application.register("snow", SnowController);
