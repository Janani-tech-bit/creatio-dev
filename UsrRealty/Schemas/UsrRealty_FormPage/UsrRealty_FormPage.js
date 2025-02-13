define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "66662e0a-c62d-453e-9cd9-7fb4ef58036c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_ltmp28n",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_ltmp28n"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_w7m2n2u",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_w7m2n2u"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_cjsem22",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_cjsem22",
					"readonly": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_d73o10i",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_d73o10i",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_zvxvozg",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_zvxvozg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comments",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComments_zfp2jh4",
					"labelPosition": "auto",
					"control": "$PDS_UsrComments_zfp2jh4",
					"multiline": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Percent",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionpercent_ekmwrak",
					"control": "$PDS_UsrOfferTypeUsrCommissionpercent_ekmwrak",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_5l5r7kr",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_5l5r7kr_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ea2hj7r",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_5l5r7kr",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9den38w",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ea2hj7r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_r8c66ug",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_r8c66ug_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_9den38w",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_n7ju2x8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_n7ju2x8_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_na7mb2aDS"
						}
					}
				},
				"parentName": "FlexContainer_9den38w",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_thfpdnp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_thfpdnp_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_9den38w",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_4ebsfu3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_4ebsfu3_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_thfpdnp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_752pjmd",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_752pjmd_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_thfpdnp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_7vnyk5r",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_7vnyk5r_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_7vnyk5r_GridDetail_na7mb2a",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_na7mb2a"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_7vnyk5r_SearchValue",
							"GridDetailSearchFilter_7vnyk5r_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_9den38w",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_j12s58e",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_5l5r7kr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "VisitsGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_na7mb2a",
					"activeRow": "$GridDetail_na7mb2a_ActiveRow",
					"selectionState": "$GridDetail_na7mb2a_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_na7mb2a_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_na7mb2aDS_Id",
					"columns": [
						{
							"id": "3df55261-e039-2dd5-11a8-821d8c11c34c",
							"code": "GridDetail_na7mb2aDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_na7mb2aDS_UsrVisitDateTime)#",
							"dataValueType": 7,
							"width": 190
						},
						{
							"id": "8c7e887f-f9c9-6774-c42b-dc02a3422f60",
							"code": "GridDetail_na7mb2aDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_na7mb2aDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 184
						},
						{
							"id": "d8115def-4da8-fb8f-72cd-cbcf6b2dd8ce",
							"code": "GridDetail_na7mb2aDS_UsrOwner",
							"caption": "#ResourceString(GridDetail_na7mb2aDS_UsrOwner)#",
							"dataValueType": 10,
							"width": 99
						},
						{
							"id": "ac904988-b4af-be04-c5c6-40b2d7db4544",
							"code": "GridDetail_na7mb2aDS_UsrComments",
							"caption": "#ResourceString(GridDetail_na7mb2aDS_UsrComments)#",
							"dataValueType": 28,
							"width": 165
						},
						{
							"id": "2fcdcf47-0529-cad9-25be-faefb09c49fe",
							"code": "GridDetail_na7mb2aDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_na7mb2aDS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 168
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_j12s58e",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_na7mb2a_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_na7mb2aDS",
							"filters": "$GridDetail_na7mb2a | crt.ToCollectionFilters : 'GridDetail_na7mb2a' : $GridDetail_na7mb2a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_na7mb2a_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_na7mb2a_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_na7mb2aDS",
							"filters": "$GridDetail_na7mb2a | crt.ToCollectionFilters : 'GridDetail_na7mb2a' : $GridDetail_na7mb2a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_na7mb2a_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_na7mb2a_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_na7mb2a_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "VisitsGridDetail",
							"filters": "$GridDetail_na7mb2a | crt.ToCollectionFilters : 'GridDetail_na7mb2a' : $GridDetail_na7mb2a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_na7mb2a_SelectionState"
						}
					}
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_na7mb2a_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_na7mb2aDS",
							"filters": "$GridDetail_na7mb2a | crt.ToCollectionFilters : 'GridDetail_na7mb2a' : $GridDetail_na7mb2a_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_na7mb2a_SelectionState"
						}
					}
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "MenuItem_y9uvlqm",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_y9uvlqm_caption)#"
				},
				"parentName": "VisitsGridDetail",
				"propertyName": "bulkActions",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CommentRequired",
				"values": {
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.PDS_UsrColumn8_9jp6omq",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn8_9jp6omq",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_ltmp28n": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_w7m2n2u": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_d73o10i": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_zvxvozg": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrComments_zfp2jh4": {
						"modelConfig": {
							"path": "PDS.UsrComments"
						}
						
					},
					"PDS_UsrCommission_cjsem22": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionpercent_ekmwrak": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionpercent_ekmwrak"
						}
					},
					"GridDetail_na7mb2a": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_na7mb2aDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_7vnyk5r_GridDetail_na7mb2a",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComments"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_na7mb2aDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_na7mb2aDS.UsrVisitDateTime"
									}
								},
								"GridDetail_na7mb2aDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_na7mb2aDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_na7mb2aDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_na7mb2aDS.UsrOwner"
									}
								},
								"GridDetail_na7mb2aDS_UsrComments": {
									"modelConfig": {
										"path": "GridDetail_na7mb2aDS.UsrComments"
									}
								},
								"GridDetail_na7mb2aDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_na7mb2aDS.UsrParentRealty"
									}
								},
								"GridDetail_na7mb2aDS_Id": {
									"modelConfig": {
										"path": "GridDetail_na7mb2aDS.Id"
									}
								}
							}
						}
					},
					"PDS_UsrColumn8_9jp6omq": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_na7mb2aDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionpercent_ekmwrak": {
									"path": "UsrOfferType.UsrCommissionpercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_na7mb2aDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrComments": {
									"path": "UsrComments"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      					if (request.attributeName === 'PDS_UsrPrice_ltmp28n' || 				             // if price changed
					   request.attributeName === 'PDS_UsrOfferTypeUsrCommissionpercent_ekmwrak' ) { 		// or percent changed
						var price = await request.$context.PDS_UsrPrice_ltmp28n;
						var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionpercent_ekmwrak;
						var commission = price * percent / 100;
						request.$context.PDS_UsrCommission_cjsem22 = commission;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			
			{
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system request handler. */
        handler: async (request, next) => {
            /* Check the request status. */
            if (request.attributeName === "PDS_UsrPrice_ltmp28n") 
				{
					var price = await request.$context.PDS_UsrPrice_ltmp28n;
	                const sysSettingsService = new sdk.SysSettingsService();
						
				     var MinPriceToRequireRealtyComment = await        
					sysSettingsService.getByCode('MinPriceToRequireRealtyComment');
						
				var minPrice = MinPriceToRequireRealtyComment.value;
						
			 if (price > minPrice) {
					
				 request.$context.PDS_UsrColumn8_9jp6omq = true;
						
				 } else {
		
				 request.$context.PDS_UsrColumn8_9jp6omq = false;
						}
					}
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
	
	        }
			  }
    
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});