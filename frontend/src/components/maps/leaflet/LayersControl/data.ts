import { ILayerItem } from './types';

export const layersTree: ILayerItem[] = [
  {
    key: 'Administrative Boundaries',
    label: 'Administrative Boundaries',
    on: false,
    nodes: [
      {
        key: 'currentEconomicRegions',
        label: 'Current Census Economic Regions',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_HUMAN_CULTURAL_ECONOMIC.CEN_ECONOMIC_REGIONS_SVW/ows?',
        layers: 'pub:WHSE_HUMAN_CULTURAL_ECONOMIC.CEN_ECONOMIC_REGIONS_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 0,
        id: 'currentEconomicRegions',
        color: '#bbdefb',
        outline: '#7E8185',
      },
      {
        key: 'moti',
        label: 'MOTI Regional Boundaries',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_ADMIN_BOUNDARIES.TADM_MOT_REGIONAL_BNDRY_POLY/ows?',
        layers: 'pub:WHSE_ADMIN_BOUNDARIES.TADM_MOT_REGIONAL_BNDRY_POLY',
        transparent: true,
        format: 'image/png',
        zIndex: 21,
        id: 'moti',
        color: ['#E4D597', '#F4EF75', '#E6C46D'],
        outline: '#ACA08B',
      },
      {
        key: 'municipalities',
        label: 'Municipalities',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_MUNICIPALITIES_SP',
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_MUNICIPALITIES_SP/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 20,
        id: 'municipalityLayer',
        opacity: 0.5,
        color: '#f2b3ff',
        outline: '#747374',
      },
      {
        key: 'regionalDistricts ',
        label: 'Regional Districts ',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP',
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.ABMS_REGIONAL_DISTRICTS_SP/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 19,
        id: 'regionalDistricts',
        opacity: 0.5,
      },
    ],
  },
  {
    key: 'firstNations',
    label: 'First Nations',
    on: false,
    nodes: [
      {
        key: 'firstNationsReserves',
        label: 'First Nations reserves',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_ADMIN_BOUNDARIES.ADM_INDIAN_RESERVES_BANDS_SP/ows?',
        layers: 'pub:WHSE_ADMIN_BOUNDARIES.ADM_INDIAN_RESERVES_BANDS_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationsReserves',
        color: '#ebe0d7',
        outline: '#8D847F',
      },
      {
        key: 'firstNationTreatyAreas',
        label: 'First Nation Treaty Areas',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_AREA_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_AREA_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatyAreas',
      },
      {
        key: 'firstNationTreatyLands',
        label: 'First Nations Treaty Lands',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_LAND_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_LAND_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatyLands',
      },
      {
        key: 'firstNationTreatyRelatedLands',
        label: 'First Nations Treaty Related Lands',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_RELATED_LAND_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_RELATED_LAND_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatyRelatedLands',
      },
      {
        key: 'firstNationTreatySideAgreement',
        label: 'First Nation Treaty Side Agreements',
        on: false,
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_SIDE_AGREEMENTS_SP/ows?',
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.FNT_TREATY_SIDE_AGREEMENTS_SP',
        transparent: true,
        format: 'image/png',
        zIndex: 10,
        id: 'firstNationTreatySideAgreement',
        color: '#F8D5D2',
        outline: '#D18D84',
      },
    ],
  },
  {
    key: 'landOwnership',
    label: 'Land Ownership',
    on: false,
    nodes: [
      {
        key: 'crownLeases',
        label: 'Crown Leases',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_LEASES_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_LEASES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 7,
        id: 'crownLeases',
        opacity: 0.5,
        color: 'transparent',
        outline: '#1F6182',
        stripes: '#1F6182',
      },
      {
        key: 'crownInventory',
        label: 'Crown Inventory',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_INVENTORY_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_INVENTORY_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 6,
        id: 'crownInventory',
        opacity: 0.5,
        color: '#fcc1eb',
        outline: '#A286A1',
      },
      {
        key: 'crownLandLicenses',
        label: 'Crown Land Licenses',
        on: false,
        layers: 'pub:WHSE_TANTALIS.TA_CROWN_LICENSES_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_TANTALIS.TA_CROWN_LICENSES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 5,
        id: 'crownLandLicenses',
        opacity: 0.5,
        color: 'transparent',
        outline: '#12387E',
        stripes: '#12387E',
      },
      {
        key: 'parcelBoundaries',
        label: 'Parcel Boundaries',
        on: true,
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_CADASTRE.PMBC_PARCEL_FABRIC_POLY_SVW/ows?',
        layers: 'pub:WHSE_CADASTRE.PMBC_PARCEL_FABRIC_POLY_SVW',
        transparent: true,
        format: 'image/png',
        zIndex: 18,
        id: 'parcelLayer',
        color: 'transparent',
        outline: '#E6A018',
      },
    ],
  },
  {
    key: 'zoning',
    label: 'Zoning',
    on: false,
    nodes: [
      {
        key: 'agriculturalLandReserveLines',
        label: 'Agricultural Land Reserve Lines',
        on: false,
        layers: 'pub:WHSE_LEGAL_ADMIN_BOUNDARIES.OATS_ALR_BOUNDARY_LINES_SVW',
        url:
          'https://openmaps.gov.bc.ca/geo/pub/WHSE_LEGAL_ADMIN_BOUNDARIES.OATS_ALR_BOUNDARY_LINES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 4,
        id: 'agriculturalLandReserveLines',
        opacity: 0.5,
        color: 'transparent',
        outline: '#00b300',
      },
    ],
  },
  {
    key: 'disturbances',
    label: 'Disturbances',
    on: false,
    nodes: [
      {
        key: 'environmentalRemediationSites',
        label: 'Environmental Remediation Sites',
        on: false,
        layers: 'pub:WHSE_WASTE.SITE_ENV_RMDTN_SITES_SVW',
        url: 'https://openmaps.gov.bc.ca/geo/pub/WHSE_WASTE.SITE_ENV_RMDTN_SITES_SVW/ows?',
        transparent: true,
        format: 'image/png',
        zIndex: 4,
        id: 'environmentalRemediationSites',
        opacity: 0.5,
        color: '#DC0000',
        outline: 'black',
        circle: true,
      },
    ],
  },
];
