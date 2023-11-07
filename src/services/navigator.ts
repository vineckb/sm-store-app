import { StackActions } from "@react-navigation/native";

let _navigator: any;

export function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

export function navigate(routeName: string, params: any = {}) {
  _navigator.dispatch(StackActions.push(routeName, params));
}
