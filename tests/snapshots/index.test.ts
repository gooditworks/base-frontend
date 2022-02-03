import {test} from "@playwright/test"
import {snapshot} from "../utils"

test("index page snapshot", ({page}) => snapshot(page, "/", "index.png"))
