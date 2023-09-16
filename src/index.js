import { render } from "./controlpanel";
import { remove} from "./createTodo";
import { spreadTodoForm, removebtn} from "./dommanipulation";
import { submitTodo} from "./dommanipulation";
spreadTodoForm();
// display();
render();
submitTodo();
removebtn();