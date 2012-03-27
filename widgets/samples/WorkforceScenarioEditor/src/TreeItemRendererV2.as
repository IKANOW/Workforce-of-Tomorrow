// ActionScript file
package
{
	
	import com.ikanow.infinit.e.assets.skins.irs.TreeBodSkin;
	import com.ikanow.infinit.e.assets.skins.irs.TreeYearSkin;
	
	import flash.display.Loader;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.TextEvent;
	import flash.net.URLRequest;
	
	import flashx.textLayout.formats.BackgroundColor;
	
	import mx.containers.HBox;
	import mx.controls.ColorPicker;
	import mx.controls.treeClasses.*;
	import mx.controls.treeClasses.TreeItemRenderer;
	import mx.events.StateChangeEvent;
	import mx.states.SetStyle;
	import mx.states.State;
	
	import spark.components.BorderContainer;
	import spark.components.HGroup;
	import spark.components.Image;
	import spark.components.Label;
	import spark.components.Panel;
	import spark.components.SkinnableContainer;
	import spark.components.TextInput;
	import spark.events.TextOperationEvent;
	import spark.layouts.HorizontalLayout;
	
	public class TreeItemRendererV2 extends TreeItemRenderer{
		public var skin:SkinnableContainer;
		public var hgroup:HGroup;
		public var pct:TextInput;
		public var itemXml:XML;
		public var begFte:Label;
		public var projChange:Label;
		public var perChange:Label;
		public var perHireLabel:Label;
		public var level:String;
		public function TreeItemRendererV2(){
			super();
			mouseEnabled = false;
		}
		
		override public function set data(value:Object):void{
			if(value != null){
				super.data = value;
				
				
				
				this.itemXml = XML(value);
				if(this.itemXml.@pct != null){
					this.pct.text = this.itemXml.@pct;
				}
				if(this.itemXml.@titlebar != null && this.itemXml.@titlebar.toString() != "")
				{
					if(this.itemXml.@titlebar.toString() == "true")
					{
						this.pct.visible = false;
						this.pct.includeInLayout = false;
						this.setStyle("color", "white");
						this.setStyle("z-index", "99");
						this.setStyle("fontWeight", "bold");
						
						if(this.itemXml.@pName.toString() == "Year")
						{
							this.begFte.setStyle("color", "white");
							this.begFte.text = "Beginning FTEs";
							this.begFte.setStyle("fontWeight", "bold");
							this.begFte.setStyle("fontSize", "10");
							
							this.projChange.setStyle("color", "white");
							this.projChange.text = "Projected Change";
							this.projChange.setStyle("fontWeight", "bold");
							this.projChange.setStyle("fontSize", "10");
							this.projChange.setStyle("borderStyle", "solid");
							this.projChange.setStyle("borderSides", "right");
							
							this.perChange.setStyle("color", "white");
							this.perChange.text = "Percent Changed";
							this.perChange.setStyle("fontWeight", "bold");
							this.perChange.setStyle("fontSize", "10");
							
							this.perHireLabel.setStyle("color", "white");
							this.perHireLabel.text = "Percent to Hire";
							this.perHireLabel.setStyle("fontWeight", "bold");
							this.perHireLabel.setStyle("fontSize", "10");
							this.perHireLabel.visible = true;
							this.perHireLabel.includeInLayout = true;
							
							this.skin.setStyle("skinClass", Class(TreeYearSkin));
							this.skin.visible = true;
							this.setChildIndex(this.skin, 0);
							
							this.level = "topYear";
							
						}
						else if (this.itemXml.@pName.toString() == "BOD")
						{
							this.begFte.visible == false;
							this.begFte.includeInLayout == false;
							this.projChange.visible == false;
							this.projChange.includeInLayout == false;
							this.perChange.visible == false;
							this.perChange.includeInLayout == false;
							this.perHireLabel.visible == false;
							this.perHireLabel.includeInLayout == false;
							this.skin.setStyle("skinClass", Class(TreeBodSkin));
							this.setChildIndex(this.skin, 0);
							this.skin.visible = true;
							
							this.begFte.text = "";
							this.projChange.text = "";
							this.perChange.text = "";
							
							
							this.level = "topBod";
						}
						
					}
					
				}
				else //if this is not a titlebar {year,bod bar}
				{
					this.pct.visible = true;
					this.setStyle("color", "black");
					this.setStyle("fontWeight", "normal");
					
					this.begFte.setStyle("color", "black");
					this.begFte.setStyle("fontWeight", "normal");
					
					this.projChange.text = "";
					this.projChange.setStyle("color", "black");
					this.projChange.setStyle("fontWeight", "normal");
					
					this.perChange.text = "";
					this.perChange.setStyle("color", "black");
					this.perChange.setStyle("fontWeight", "normal");
					
					this.perHireLabel.visible = false;
					this.perHireLabel.includeInLayout = false;
					
					this.skin.visible = false;
					this.skin.includeInLayout = false;
					
					if (this.itemXml.@year.toString() == this.itemXml.@pName.toString())
					{
						this.level = "year";
					}
					else if (this.itemXml.@bod.toString() == this.itemXml.@pName.toString())
					{
						this.level = "bod";
					}
					
				} // end else

				ensurePositioning();	
			}
		}
		override protected function createChildren():void{
			super.createChildren();
			
			skin = new SkinnableContainer();
			skin.x = -4;
			//skin.y = 0;
			skin.percentWidth = 100;
			skin.percentHeight = 100;
			//skin.width = parent.width;
			//skin.height = parent.height;
			skin.enabled = true;
			var hlay:HorizontalLayout = new HorizontalLayout();
			//hlay.verticalAlign = "top";
			hlay.variableColumnWidth = false;
			skin.layout = hlay;
			
			addChild(skin);
			
			
			hgroup = new HGroup();
			hgroup.percentWidth = 100;
			hgroup.x = 0;
			hgroup.enabled = true;
			
			addChild(hgroup);
			
			
			begFte = new Label();
			begFte.width = 60;
			begFte.height = 20;
			begFte.enabled = true;
			begFte.setStyle("textAlign", "center");
			hgroup.addElement(begFte);
			
			projChange = new Label();
			projChange.width = 60;
			projChange.height = 20;
			projChange.enabled = true;
			projChange.setStyle("textAlign", "center");
			hgroup.addElement(projChange);
			
			perChange = new Label();
			perChange.width = 60;
			perChange.height = 20;
			perChange.enabled = true;
			perChange.setStyle("textAlign", "center");
			hgroup.addElement(perChange);
			
			perHireLabel = new Label();
			perHireLabel.width = 60;
			perHireLabel.height = 20;
			perHireLabel.enabled = true;
			perHireLabel.setStyle("textAlign", "center");
			hgroup.addElement(perHireLabel);
			
			pct = new TextInput();
			pct.width = 40;
			pct.height = 20;
			pct.setStyle("textAlign", "center");
			pct.restrict="0-9.";
			pct.addEventListener(Event.CHANGE, handlePctChange);
			hgroup.addElement(pct);
			
		}
		override protected function updateDisplayList(unscaledWidth:Number, unscaledHeight:Number):void{
			super.updateDisplayList(unscaledWidth,unscaledHeight);
			if(super.data){
				//var tld:TreeListData = TreeListData(super.listData);
				
				//This code is responsible for taking the XML values and translating to
				//the tree properly. All other code just modifies the xml, not the tree.
				if (this.itemXml.@pName != "Year" && this.itemXml.@pName != "BOD")
				{
					//signifies an initial load (performance tweak)
					if (this.itemXml.@projChange.toString() == "")
					{
						updateAll();
					}
					this.begFte.text = parseFloat(this.itemXml.@FTEs).toFixed(2);
					var projChangeVal:Number = parseFloat(this.itemXml.@projChange);
					var perChangeVal:Number = parseFloat(this.itemXml.@perChange);
					var symbol:String = "";
					if (!isNaN(projChangeVal))
					{
						if (projChangeVal >= 0)
							symbol = "+";
						else
							symbol = "-";
						
						this.projChange.text = symbol + Math.abs(projChangeVal).toFixed(2);
					}
					else
					{
						this.projChange.text = "--";
					}
					
					
					if (!isNaN(perChangeVal) && perChangeVal != Infinity)
						this.perChange.text = symbol + Math.abs(perChangeVal).toFixed(2) + "%";
					else
						this.perChange.text = "--";
				}
				
				skin.width = super.width + 5;
				skin.height = super.height + 3;
				ensurePositioning();
			}
		}
		
		private function ensurePositioning():void
		{
			if (this.begFte != null)
			{
				this.begFte.x = super.width - 260;
			}
			if (this.projChange != null)
			{
				this.projChange.x = super.width - 200;
			}
			if (this.perChange != null)
			{
				this.perChange.x = super.width - 140;
			}
			if (this.perHireLabel != null)
			{
				this.perHireLabel.x = super.width - 70;
			}
			if (this.pct != null)
			{
				this.pct.x = super.width - 55;
			}
		}
		
		private function getTopLevel():XML
		{
			
			if (this.level == "year")
			{
				return this.itemXml.parent();
			}
			else if (this.level == "bod")
			{
				return this.itemXml.parent().parent().parent();
			}
			
			return null;
		}
		
		private function getCumulativePct(stopAtYear:Number, bod:String):Number
		{
			var topLevel:XML = getTopLevel();
			var sum:Number = 0;

			
			if (topLevel != null)
			{
				//makes the assumption that the years are in numerical order and pct values are correct
				for each(var year:XML in topLevel.year)
				{
					var yearNum:Number = parseInt(year.@year);
					
					
					var pctNum:Number = parseFloat(year.titleBar.bod.(@bod==bod).@pct);
					if (!isNaN(pctNum))
						sum += pctNum;
					
					if (yearNum >= stopAtYear)
						return sum;
				}
				
			}
			
			return sum;
			
		}
		
		
		//Updates all values in tree based on current changes
		private function updateAll(startAtYear:Number = 0):void
		{
			//Step 1: Find the upper-most XML parent

			
			var topLevel:XML = getTopLevel();
			
			
			//Step 2 hold Bod totals in array to find differences
			if (topLevel != null)
			{
				var totalDifference:Number = 0;
				
				//makes the assumption that the years are in numerical order and totals are correct
				for each(var year:XML in topLevel.year)
				{
					if (parseInt(year.@year) >= startAtYear)
					{
						var yearTotalFTEs:Number = 0;
						var yearTotalProjChange:Number = 0;
						
						for each (var bod:XML in year.titleBar.bod)
						{
							var prevYear:int = parseInt(year.@year) - 1;
							
							// Update FTE based on a possible changed percent to hire value
							var oFTEVal:Number = parseInt(bod.@originalFTE);
							
							var cumPct:Number = getCumulativePct(parseInt(bod.@year),bod.@bod.toString());
							var change:Number = cumPct/100;
							var newVal:Number = oFTEVal * change;
							var thisYearFTE:Number = oFTEVal + newVal;
							
							bod.@FTEs = thisYearFTE;
							yearTotalFTEs += thisYearFTE;

							
							// Update Projected Change
							var nextYear:int = parseInt(year.@year) + 1;
							var nextYearFTE:Number = parseFloat(topLevel.year.titleBar.bod.(@bod==bod.@bod).(@year==nextYear).@FTEs);
							
							
							if (isNaN(nextYearFTE)) //happens for final year data
							{
								bod.@projChange = "--";
								bod.@perChange = "--";
							}
							else
							{
								var projectedChange:Number = nextYearFTE - (thisYearFTE);
								bod.@projChange = projectedChange;
								yearTotalProjChange += projectedChange;
								
								//Update Percent Change
								var percentChange:Number = (projectedChange/thisYearFTE) * 100;
								bod.@perChange = percentChange;
							}
							
							
							
						}
						//set total calculated FTE count for year rows
						year.@FTEs = yearTotalFTEs;
						year.@projChange = yearTotalProjChange;
						year.@perChange = (yearTotalProjChange/yearTotalFTEs) * 100;
					}
				}
				
			}
		}
		
		private function handlePctChange(evt:Event):void{
		
			if (this.pct.text == "")
				return;
				
			var newValue:String = this.pct.text;
			this.itemXml.@pct = newValue;
			
			
			//This means year was changed, all Bods with the same year should change
			if (this.itemXml.@year.toString() == this.itemXml.@pName.toString())
			{
				for each (var item:XML in this.itemXml.children().bod)
				{
					item.@pct=newValue;
				}
			}

			
			
			//Then we have to go through every year's total, find the difference in FTEs from the original
			//values and add that number to the FTE's of the following year.
			var thisyr:Number = parseInt(this.itemXml.@year);
			if (isNaN(thisyr))
			{
				updateAll();
				updateAll();
			}
			else
			{
				updateAll(thisyr); //performance tweak
				updateAll();
			}
		}
	}
}