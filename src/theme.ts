import { colorsTuple, createTheme } from "@mantine/core";

const theme = createTheme({
    /** Define your custom color palette */
    colors: {
        navy: colorsTuple(Array.from({ length: 10 }, () => "#194568")),
        orange: colorsTuple(
            Array.from({ length: 10 }, () => "#f2855e")
        ),
        sky: colorsTuple(Array.from({ length: 10 }, () => "#d7eff3")),
        tan: colorsTuple(Array.from({ length: 10 }, () => "#f6f6ea")),
    },

    fontFamily: "Montserrat, sans-serif",
    headings: {
        fontFamily: 'Garnet Capital Black, sans-serif', // Optional: If you want different headings font
    },
});

export default theme;
