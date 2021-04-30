import { Route } from "react-router-dom";
import { SmileOutlined } from "@ant-design/icons";

import SampleFeature from "../../feature/sample-feature";

const BASE_URL = "/";

const routes = [
    {
        name: "SAMPLE_FEATURE",
        path: `${BASE_URL}sample`,
        exact: false,
        icon: <SmileOutlined />,
        component: <SampleFeature />
    }
];

// TODO
// Add Permissions & 404
export const getRoute = () => {
    return routes.map(({ name, path, exact, component }) => {
        return (
            <Route
                key={name}
                exact={exact}
                path={path}
                render={() => component}
            />
        );
    });
};