package com.lemania.eprospects.client.view;

import java.util.List;

import com.gwtplatform.mvp.client.ViewWithUiHandlers;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.lemania.eprospects.client.NotificationTypes;
import com.lemania.eprospects.client.presenter.ProfileManagementPresenter;
import com.lemania.eprospects.client.uihandler.ProfileManagementUiHandler;
import com.lemania.eprospects.shared.BrancheProxy;
import com.lemania.eprospects.shared.ClasseProxy;
import com.lemania.eprospects.shared.ProfessorProxy;
import com.lemania.eprospects.shared.ProfileBrancheProxy;
import com.lemania.eprospects.shared.ProfileProxy;
import com.lemania.eprospects.shared.ProfileSubjectProxy;
import com.lemania.eprospects.shared.SubjectProxy;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TextBox;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.cellview.client.Column;
import com.google.gwt.user.cellview.client.DataGrid;
import com.google.gwt.user.cellview.client.TextColumn;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.view.client.ListDataProvider;
import com.google.gwt.view.client.SelectionChangeEvent;
import com.google.gwt.view.client.SingleSelectionModel;
import com.google.gwt.cell.client.ButtonCell;
import com.google.gwt.cell.client.CheckboxCell;
import com.google.gwt.cell.client.EditTextCell;
import com.google.gwt.cell.client.FieldUpdater;
import com.google.gwt.dom.client.Style.Unit;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ChangeEvent;
import com.google.gwt.user.client.ui.DoubleBox;

public class ProfileManagementView extends ViewWithUiHandlers<ProfileManagementUiHandler> implements
		ProfileManagementPresenter.MyView {

	//
	private final Widget widget;	
	
	// Thuan
	ListDataProvider<ProfileSubjectProxy> subjectDataProvider = new ListDataProvider<ProfileSubjectProxy>();
	ListDataProvider<ProfileBrancheProxy> brancheDataProvider = new ListDataProvider<ProfileBrancheProxy>();
	//
	private int selectedSubjectIndex;
	private ProfileSubjectProxy selectedSubject;
	//
	private int selectedBrancheIndex;
	private ProfileBrancheProxy selectedBranche;
	
	
	public interface Binder extends UiBinder<Widget, ProfileManagementView> {
	}

	@Inject
	public ProfileManagementView(final Binder binder) {
		widget = binder.createAndBindUi(this);
	}

	@Override
	public Widget asWidget() {
		return widget;
	}
	@UiField ListBox lstProfiles;
	@UiField TextBox txtNewProfileName;
	@UiField Button cmdSaveNewProfile;
	@UiField Button cmdCreateNewProfile;
	@UiField ListBox lstSubjects;
	@UiField ListBox lstBranches;
	@UiField FlowPanel pnlAddNewProfile;
	@UiField ListBox lstProfessors;
	@UiField DoubleBox txtSubjectCoef;
	@UiField DoubleBox txtBrancheCoef;
	@UiField Button cmdAddSubject;
	@UiField Button cmdAddBranche;
	
	@UiField(provided=true) DataGrid<ProfileSubjectProxy> tblSubjects = new DataGrid<ProfileSubjectProxy>();
	@UiField(provided=true) DataGrid<ProfileBrancheProxy> tblBranches = new DataGrid<ProfileBrancheProxy>();
	@UiField ListBox lstClasses;
	
	/*
	 * 
	 * */
	@UiHandler("cmdCreateNewProfile")
	void onCmdCreateNewProfileClick(ClickEvent event) {
		// show the text box to create a new profile
		txtNewProfileName.setText("");
		pnlAddNewProfile.setVisible(true);
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("cmdSaveNewProfile")
	void onCmdSaveNewProfileClick(ClickEvent event) {
		//
		if (getUiHandlers() != null)
			getUiHandlers().createNewProfile( txtNewProfileName.getText(), lstClasses.getValue(lstClasses.getSelectedIndex()) );
	}
	

	/*
	 * 
	 * */
	@Override
	public void resetForm() {
		//
		pnlAddNewProfile.setVisible(false);
		//
		subjectDataProvider.getList().clear();
		brancheDataProvider.getList().clear();
		//
		lstProfiles.clear();
		lstSubjects.clear();
		lstProfessors.clear();
		lstBranches.clear();
		//
		txtSubjectCoef.setText("");
		txtBrancheCoef.setText("");
		//
	}
	

	/*
	 * Add new profile to list after successfully added
	 * */
	@Override
	public void addNewProfileToList(ProfileProxy newProfile) {
		//
		lstProfiles.addItem( newProfile.getProfileName(), newProfile.getId().toString() );
	}
	

	/*
	 * 
	 * */
	@Override
	public void setProfileListData(List<ProfileProxy> profiles) {
		//
		lstProfiles.clear();
		lstProfiles.addItem("-","");
		//
		for (ProfileProxy profile : profiles){
			lstProfiles.addItem( profile.getProfileName(), profile.getId().toString() );
		}
		lstProfiles.setSelectedIndex(0);
	}
	

	/*
	 * 
	 * */
	@Override
	public void setSubjectListData(List<SubjectProxy> subjectList) {
		//
		lstSubjects.clear();
		lstSubjects.addItem("-","");
		
		for (SubjectProxy subject : subjectList){
			lstSubjects.addItem( subject.getSubjectName(), subject.getId().toString() );
		}
		lstSubjects.setSelectedIndex(0);
	}
	

	/*
	 * 
	 * */
	@Override
	public void setBrancheListData(List<BrancheProxy> brancheList) {
		//
		lstBranches.clear();
		lstBranches.addItem("-","");
		
		for (BrancheProxy branche : brancheList){
			lstBranches.addItem( branche.getBrancheName(), branche.getId().toString() );
		}
		lstBranches.setSelectedIndex(0);
	}
	
	
	/*
	 * Load list of professeurs that are responsible for the selected subject
	 * */
	@UiHandler("lstSubjects")
	void onLstSubjectsChange(ChangeEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().loadProfessorList( lstSubjects.getValue( lstSubjects.getSelectedIndex()), lstClasses.getValue(lstClasses.getSelectedIndex()));
	}
	

	/*
	 * 
	 * */
	@Override
	public void setProfessorListData(List<ProfessorProxy> profs) {
		//
		lstProfessors.clear();
		lstProfessors.addItem("-","");
		
		for ( ProfessorProxy prof : profs ){
			lstProfessors.addItem( prof.getProfName(), prof.getId().toString() );
		}
		lstProfessors.setSelectedIndex(0);
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("cmdAddSubject")
	void onCmdAddSubjectClick(ClickEvent event) {
		if (getUiHandlers() != null)
			getUiHandlers().addSubjectToProfile( lstProfiles.getValue( lstProfiles.getSelectedIndex()), 
					lstSubjects.getValue(lstSubjects.getSelectedIndex()), 
					lstProfessors.getValue(lstProfessors.getSelectedIndex()),
					txtSubjectCoef.getText());
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("cmdAddBranche")
	void onCmdAddBrancheClick(ClickEvent event) {
		if (selectedSubject == null) {
			Window.alert( NotificationTypes.subject_not_selected );
			return;
		}
		if ( (getUiHandlers() != null) && (selectedSubject != null) )
			getUiHandlers().addBrancheToProfile( 
					selectedSubject.getId().toString(), 
					lstBranches.getValue(lstBranches.getSelectedIndex()), 
					txtBrancheCoef.getText(),
					selectedSubjectIndex );
	}
	

	/*
	 * 
	 * */
	@Override
	public void addNewProfileSubjectToTable(ProfileSubjectProxy profileSubject) {
		//
		subjectDataProvider.getList().add( profileSubject );
		subjectDataProvider.refresh();
		//
		tblSubjects.setHeight( Integer.toString( NotificationTypes.lineHeightShortList * subjectDataProvider.getList().size() 
				+ NotificationTypes.headerHeight) + "px");
	}
	

	/*
	 * 
	 * */
	@Override
	public void initializeTables() {
		//
		initializeSubjectTable();
		initializeBrancheTable();
	}
	

	/*
	 * 
	 * */
	private void initializeSubjectTable() {
		//
		// -- Name
	    TextColumn<ProfileSubjectProxy> colSubjectName = new TextColumn<ProfileSubjectProxy>() {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getSubjectName();
	      }
	    };
	    tblSubjects.setColumnWidth(colSubjectName, 30.0, Unit.PCT);
	    tblSubjects.addColumn(colSubjectName, "Matière");
	    
	    
	    // -- Coef
	    Column<ProfileSubjectProxy, String> colCoef = new Column<ProfileSubjectProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getSubjectCoef().toString();
	      } 
	    };	    
	    //
	    colCoef.setFieldUpdater(new FieldUpdater<ProfileSubjectProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileSubjectProxy subject, String value){	    		
	    		//
	    		if (!subject.equals(selectedSubject))
	    			return;	    		
	    		//
	    		if (getUiHandlers() != null) {
	    			selectedSubjectIndex = index;
	    			getUiHandlers().updateProfileSubject( subject, value, subject.getIsActive(), selectedSubjectIndex );
	    		}	    		
	    	}
	    });
	    tblSubjects.setColumnWidth(colCoef, 10.0, Unit.PCT);
	    tblSubjects.addColumn( colCoef, "Coefficient" );
	    	    
	    // -- Professor
	    TextColumn<ProfileSubjectProxy> colProf = new TextColumn<ProfileSubjectProxy>() {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getProfName();
	      }
	    };
	    tblSubjects.addColumn(colProf, "Professeur");	    

	    // -- Active
	    CheckboxCell cellActive = new CheckboxCell();
	    Column<ProfileSubjectProxy, Boolean> colActive = new Column<ProfileSubjectProxy, Boolean>(cellActive) {
	    	@Override
	    	public Boolean getValue(ProfileSubjectProxy subject){
	    		return subject.getIsActive();
	    	}	    	
	    };	    	    
	    //
	    colActive.setFieldUpdater(new FieldUpdater<ProfileSubjectProxy, Boolean>(){
	    	@Override
	    	public void update(int index, ProfileSubjectProxy subject, Boolean value){	    		
	    		//
	    		if (getUiHandlers() != null) {
	    			selectedSubjectIndex = index;
	    			getUiHandlers().updateProfileSubject( subject, subject.getSubjectCoef().toString(), value, selectedSubjectIndex );	    			
	    		}	    		
	    	}
	    });
	    tblSubjects.setColumnWidth(colActive, 10.0, Unit.PCT);
	    tblSubjects.addColumn(colActive, "Active");
	    
	    // -- Branche coef
	    TextColumn<ProfileSubjectProxy> colTotalBrancheCoef = new TextColumn<ProfileSubjectProxy>() {
	      @Override
	      public String getValue(ProfileSubjectProxy object) {
	        return object.getTotalBrancheCoef().toString();
	      } 
	    };
	    tblSubjects.setColumnWidth(colTotalBrancheCoef, 10.0, Unit.PCT);
	    tblSubjects.addColumn( colTotalBrancheCoef, "Branche Coefs" );
	    
	    
	    // -- Delete
	    Column<ProfileSubjectProxy, String> colDelete = new Column<ProfileSubjectProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(ProfileSubjectProxy bp){
	    		return "X";
	    	}
	    };
	    colDelete.setFieldUpdater(new FieldUpdater<ProfileSubjectProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileSubjectProxy ps, String value){
	    		selectedSubjectIndex = index;
	    		getUiHandlers().removeSubject( ps );
	    	}
	    });
	    tblSubjects.setColumnWidth(colDelete, 10.0, Unit.PCT);
	    tblSubjects.addColumn(colDelete, "");	    
	    
	    // -- Set data display
	    subjectDataProvider.addDataDisplay(tblSubjects);	    
	    
	    // -- Selection model
	    // Add a selection model to handle user selection.
	    final SingleSelectionModel<ProfileSubjectProxy> selectionModel = new SingleSelectionModel<ProfileSubjectProxy>();
	    tblSubjects.setSelectionModel(selectionModel);
	    selectionModel.addSelectionChangeHandler(new SelectionChangeEvent.Handler() {
	      public void onSelectionChange(SelectionChangeEvent event) {
	    	  //
	    	  selectedSubject = selectionModel.getSelectedObject();
	    	  if (selectedSubject != null) {
	    		  //
	    		  selectedSubjectIndex = subjectDataProvider.getList().indexOf(selectedSubject);
	    		  getUiHandlers().onSubjectSelected( selectedSubject.getId().toString() );
	    		  //
	    		  tblSubjects.redrawRow(selectedSubjectIndex);
	    	  }
	      }
	    });
	}
	
	
	/*
	 * 
	 * */
	private void initializeBrancheTable() {
		// -- Branche name
	    TextColumn<ProfileBrancheProxy> colBrancheName = new TextColumn<ProfileBrancheProxy>() {
	      @Override
	      public String getValue(ProfileBrancheProxy object) {
	        return object.getProfileBrancheName();
	      }
	    };
	    tblBranches.setColumnWidth(colBrancheName, 60.0, Unit.PCT);
	    tblBranches.addColumn(colBrancheName, "Branche");
	    
	    // -- Coef
	    Column<ProfileBrancheProxy, String> colCoef = new Column<ProfileBrancheProxy, String>(new EditTextCell()) {
	      @Override
	      public String getValue(ProfileBrancheProxy object) {
	        return object.getBrancheCoef().toString();
	      } 
	    };
	    //
	    colCoef.setFieldUpdater(new FieldUpdater<ProfileBrancheProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileBrancheProxy branche, String value){	    		
	    		//
	    		if (getUiHandlers() != null) {	    			
	    			selectedBrancheIndex = index;
	    			selectedBranche = branche;
	    			getUiHandlers().updateProfileBranche( branche, value, selectedSubject.getId().toString(), selectedSubjectIndex );
	    		}	    		
	    	}
	    });
	    tblBranches.setColumnWidth(colCoef, 20.0, Unit.PCT);
	    tblBranches.addColumn( colCoef, "Coefficient" );
	    
	    // -- Delete
	    Column<ProfileBrancheProxy, String> colDelete = new Column<ProfileBrancheProxy, String> (new ButtonCell()){
	    	@Override
	    	public String getValue(ProfileBrancheProxy bp){
	    		return "X";
	    	}
	    };
	    colDelete.setFieldUpdater(new FieldUpdater<ProfileBrancheProxy, String>(){
	    	@Override
	    	public void update(int index, ProfileBrancheProxy bp, String value){	    		
	    		//
	    		selectedBrancheIndex = index;
	    		getUiHandlers().removeBranche(bp, selectedSubject.getId().toString(), selectedSubjectIndex);
	    	}
	    });
	    tblBranches.setColumnWidth(colDelete, 20.0, Unit.PCT);
	    tblBranches.addColumn(colDelete, "");
	    
	    // -- Data display
	    brancheDataProvider.addDataDisplay(tblBranches);
	}
	
	
	/*
	 * Load subjects and branches list when a profile is chosen
	 * */
	@UiHandler("lstProfiles")
	void onLstProfilesChange(ChangeEvent event) {
		//
		tblSubjects.getSelectionModel().setSelected(selectedSubject, false);
		//
		subjectDataProvider.getList().clear();
		brancheDataProvider.getList().clear();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onProfileChanged( lstProfiles.getValue( lstProfiles.getSelectedIndex()) );
	}
	

	/*
	 * 
	 * */
	@Override
	public void setSubjectTableData(List<ProfileSubjectProxy> subjects) {
		//
		subjectDataProvider.getList().clear();
		subjectDataProvider.getList().addAll(subjects);
		subjectDataProvider.flush();
		subjectDataProvider.refresh();
		tblSubjects.redraw();
		//
		tblSubjects.setHeight(Integer.toString(NotificationTypes.lineHeightShortList * subjects.size() + NotificationTypes.headerHeight) + "px");
	}
	

	/*
	 * Show the updated data after successfully saved
	 * */
	@Override
	public void showUpdatedProfileSubject(ProfileSubjectProxy ps, Integer subjectLastIndex) {
		//
		subjectDataProvider.getList().set( subjectLastIndex, ps );
	}
	

	/*
	 * 
	 * */
	@Override
	public void setBrancheTableData( List<ProfileBrancheProxy> branches ) {
		//
		brancheDataProvider.getList().clear();
		brancheDataProvider.setList(branches);		
		//
		tblBranches.setHeight( Integer.toString(NotificationTypes.lineHeightShortList * branches.size() + NotificationTypes.headerHeight) + "px");
	}
	

	/*
	 * 
	 * */
	@Override
	public void addNewProfileBrancheToTable( ProfileBrancheProxy branche ) {
		//
		brancheDataProvider.getList().add(branche);
		brancheDataProvider.refresh();
		//
		tblBranches.setHeight( Integer.toString(NotificationTypes.lineHeightShortList * brancheDataProvider.getList().size() + NotificationTypes.headerHeight) + "px");
	}
	

	/*
	 * 
	 * */
	@Override
	public void removeProfileBrancheFromTable() {
		//
		brancheDataProvider.getList().remove(selectedBrancheIndex);
		brancheDataProvider.refresh();
	}
	

	/*
	 * 
	 * */
	@Override
	public void removeProfileSubjectFromTable() {
		//
		subjectDataProvider.getList().remove(selectedSubjectIndex);
		subjectDataProvider.refresh();
	}

	
	/*
	 * 
	 * */
	@Override
	public void setClassList(List<ClasseProxy> classes) {
		//
		lstClasses.clear();
		lstClasses.addItem("-","");
		
		for (ClasseProxy classe : classes){
			lstClasses.addItem( classe.getClassName(), classe.getId().toString() );
		}
		lstClasses.setSelectedIndex(0);
	}
	
	
	/*
	 * 
	 * */
	@UiHandler("lstClasses")
	void onLstClassesChange(ChangeEvent event) {
		//
		tblSubjects.getSelectionModel().setSelected(selectedSubject, false);
		//
		subjectDataProvider.getList().clear();
		brancheDataProvider.getList().clear();
		//
		if (getUiHandlers() != null)
			getUiHandlers().onClassChanged( lstClasses.getValue(lstClasses.getSelectedIndex()) );
	}

	
	/*
	 * 
	 * */
	@Override
	public void showUpdatedProfileBranche(ProfileBrancheProxy pb ) {
		//
		brancheDataProvider.getList().set( selectedBrancheIndex, pb );
	}

	
	/*
	 * 
	 * */
	@Override
	public void setReadOnly(boolean isReadOnly) {
		//
	}
}