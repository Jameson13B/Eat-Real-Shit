import React, { useContext } from "react";

import { ThemeContext } from "../App";

/**
 * Our root container to handle our widgets min/max widths, positioning and padding for all views
 */
export const Container = React.forwardRef((props, ref) => {
  const theme = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <div id={props.id ?? null} ref={ref ?? null} style={styles.container}>
      <div style={styles.content}>{props.children}</div>
    </div>
  );
});

const getStyles = theme => {
  const colorScheme = theme.colorScheme;

  return {
    container: {
      backgroundColor: theme[colorScheme].container,
      color: theme[colorScheme].text,
      minHeight: "100%",
      display: "flex",
      justifyContent: "center",
    },
    content: {
      maxWidth: "400px", // Our max content width (does not include side margin)
      minWidth: "270px", // Our min content width (does not include side margin)
      width: "100%", // We want this container to shrink and grow between our min-max
      margin: theme.spacing.large,
    },
  };
};
