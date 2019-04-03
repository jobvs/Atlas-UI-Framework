import { brand } from '../variables';

/* ==========================================================================
    Maps

    Default Class For Mendix Maps Widget
========================================================================== */

export const com_mendix_widget_native_maps_Maps = (Maps = {
    container: {
        // All ViewStyle properties are allowed
        flex: 1,
        aspectRatio: 4 / 3,
    },
    marker: {
        //Just allow these 2 properties
        color: brand.primary,
        opacity: 1,
    },
});

//== Design Properties
//## Helper classes to change the look and feel of the widget
//-------------------------------------------------------------------------------------------------------------------//
// Maps Colors
export const mapsSuccess = {
    marker: {
        color: brand.success,
    },
};
export const mapsWarning = {
    marker: {
        color: brand.warning,
    },
};
export const mapsDanger = {
    marker: {
        color: brand.danger,
    },
};

// Maps Size
export const mapsSquare = {
    container: {
        aspectRatio: 1 / 1,
    },
};

export const mapsFullHeight = {
    container: {
        flex: 1,
    },
};